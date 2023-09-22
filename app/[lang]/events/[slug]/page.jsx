import fs from 'fs';
import path from 'path';
import { getEvents } from "@/libs/getEvents";
import { withLocale } from '@/utils/locale';
import { getOgImageFromEvent } from '@/utils/image';
import matter from 'gray-matter';
import Event from '@/components/Event';

const getEventContent = (slug, locale) => {
  const event = fs.readFileSync(withLocale(path.join('content/events'), locale, slug), 'utf8');

  const { data: frontmatter, content } = matter(event);

  return {
    slug,
    frontmatter,
    content
  }
}

export const generateStaticParams = async ({ params: { lang } }) => {
  const events = await getEvents(lang);
  return events.map(event => ({ slug: event.slug }));
}

export const generateMetadata = async ({ params }) => {
  const { slug, lang } = params;
  const event = getEventContent(slug, lang);

  return {
    title: {
      default: 'AMC Project Popcorn',
      template: `${event.frontmatter.title} | AMC Project Popcorn`,
      title: event.frontmatter.title
    },
    description: event.frontmatter.description,
    openGraph: {
      title: event.frontmatter.title,
      description: event.frontmatter.description,
      url: `/events/${slug}`,
      siteName: 'AMC Project Popcorn',
      images: getOgImageFromEvent(event),
      locale: lang,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: event.frontmatter.title,
      description: event.frontmatter.description,
      images: [getOgImageFromEvent(event)]
    }
  }
}

export default function Page({ params }) {
  const { slug, lang } = params;
  const event = getEventContent(slug, lang);

  return <Event event={event} {...params} />
}

