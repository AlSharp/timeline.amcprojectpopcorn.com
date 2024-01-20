import fs from 'fs-extra';
import path from 'path';
import matter from 'gray-matter';
import { withLocale } from '@/utils/locale';
import { i18n } from '@/i18n-config';

const getOpinionsByLocale = async (locale) => {
  const opinions = await fs.readdir(path.join('content/opinions', locale))

  return opinions.map(event => {
      const slug = event.replace('.md', '');
      const eventContents = fs.readFileSync(
        withLocale(path.join('content/opinions'), locale, slug),
        'utf8'
      );

      const { data: frontmatter, content } = matter(eventContents);

      return {
        slug,
        frontmatter,
        content
      }
    })
    .filter(event => !event.frontmatter.draft)
}

export async function getOpinions(locale) {
  if (locale) return await getOpinionsByLocale(locale);
  let opinions = [];
  for (const locale of i18n.locales) {
    const opinionsByLocale = await getOpinionsByLocale(locale);
    opinions = opinions.concat(opinionsByLocale);
  }
  return opinions;
}