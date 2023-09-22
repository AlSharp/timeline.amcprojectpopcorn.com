import fs from 'fs-extra';
import path from 'path';
import matter from 'gray-matter';
import { withLocale } from '@/utils/locale';
import { i18n } from '@/i18n-config';

const getEventsByLocale = async (locale) => {
  const events = await fs.readdir(path.join('content/events', locale))

  return events.map(event => {
      const slug = event.replace('.md', '');
      const eventContents = fs.readFileSync(
        withLocale(path.join('content/events'), locale, slug),
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

export async function getEvents(locale) {
  if (locale) return await getEventsByLocale(locale);
  let events = [];
  for (const locale of i18n.locales) {
    const eventsByLocale = await getEventsByLocale(locale);
    events = events.concat(eventsByLocale);
  }
  return events;
}