import { getEvents } from "@/libs/getEvents";
import { parse, formatISO } from "date-fns";

const URL = 'https://amcapepost.com';

export default async function sitemap() {
  const _events = await getEvents();
  const events = _events.map(({ slug, frontmatter }) => ({
    url: `${URL}/en/events/${slug}`,
    lastModified: formatISO(parse(frontmatter.lastModified, 'MM/dd/yyyy', new Date()))
  }))


  const routes = [''].map(route => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString()
  }))

  return [
    ...routes,
    ...events
  ]
}