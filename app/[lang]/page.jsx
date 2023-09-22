import Link from 'next/link'
import { getEvents } from "@/libs/getEvents";
import Timeline from './timeline';
import { formatDate } from "@/utils/date";
import { parse, compareAsc } from "date-fns";


export default async function Home({ params: { lang } }) {

  const staticData = await getEvents(lang);

  const events = staticData
    .sort((a, b) => compareAsc(
      parse(a.frontmatter.date, 'MM/dd/yyyy', new Date()),
      parse(b.frontmatter.date, 'MM/dd/yyyy', new Date())
    ))
    .map(event => {
      return {
        title: formatDate(event.frontmatter.date),
        cardTitle: event.frontmatter.title,
        cardSubtitle: event.frontmatter.description,
        media: {
          name: event.frontmatter.title,
          source: {
            url: event.frontmatter.media
          },
          type: event.frontmatter.mediaType.toUpperCase()
        },
        cardDetailedText: event.content,
        url: `/events/${event.slug}`
      }
    })

  return (
    <main>
      <div id="start"></div>
      <Timeline events={events} />
      <div className="flex justify-center pt-10 pb-10 mx-auto text-lg max-w-prose border-gray-300/70 sm:pt-16">
        <Link href="#start" className="relative text-sm font-medium tracking-widest text-blue-700 uppercase duration-300 ease-in-out transition-color hover:text-blue-600">
          Back to top
        </Link>
      </div>
    </main>
  )
}
