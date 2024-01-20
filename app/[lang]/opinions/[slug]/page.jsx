import fs from 'fs';
import path from 'path';
import { getEvents } from "@/libs/getEvents";
import { withLocale } from '@/utils/locale';
import matter from 'gray-matter';
import Opinion from '@/components/Opinion';

const getOpinionContent = (slug, locale) => {
  const opinion = fs.readFileSync(withLocale(path.join('content/opinions'), locale, slug), 'utf8');

  const { data: frontmatter, content } = matter(opinion);

  return {
    slug,
    frontmatter,
    content
  }
}

export const generateStaticParams = async ({ params: { lang } }) => {
  const opinions = await getEvents(lang);
  return opinions.map(opinion => ({ slug: opinion.slug }));
}

export const generateMetadata = async ({ params }) => {
  const { slug, lang } = params;
  const opinion = getOpinionContent(slug, lang);

  return {
    title: `${opinion.frontmatter.title} | AMC APE Post`,
    description: opinion.frontmatter.description,
    openGraph: {
      title: opinion.frontmatter.title,
      description: opinion.frontmatter.description,
      url: `/opinions/${slug}`,
      siteName: 'AMC APE Post',
      images: opinion.frontmatter.media,
      locale: lang,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: opinion.frontmatter.title,
      description: opinion.frontmatter.description,
      images: [opinion.frontmatter.media]
    }
  }
}

export default function Page({ params }) {
  const { slug, lang } = params;
  const opinion = getOpinionContent(slug, lang);

  return <Opinion opinion={opinion} {...params} />
}

