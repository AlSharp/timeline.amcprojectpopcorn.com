import Link from 'next/link'
import Image from 'next/legacy/image'
import { getEvents } from "@/libs/getEvents";
import Timeline from './timeline';
import { formatDate } from "@/utils/date";
import { parse, compareAsc } from "date-fns";
import Navbar from '@/components/Navbar';


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
        cardDetailedText: event.frontmatter.shortText,
        url: `/events/${event.slug}`
      }
    })

  return (
    <div>
      <Navbar bgColor='bg-[#68C8DD]'/>
      <header>
        <div className="w-full bg-gray-100 aspect-w-2 aspect-h-1 sm:aspect-w-3 sm:aspect-h-1 md:aspect-w-4 md:aspect-h-1">
          <Image 
            className="object-cover object-center" 
            src="https://s3fkf-public.s3.us-east-2.amazonaws.com/images/go_apes_2400x600_full.png"
            alt="Apes Together Strong"
            layout="fill"
          />
        </div>
      </header>
      <main>
        <div id="start"></div>
        <Timeline events={events} />
        <div className="flex justify-center pt-10 pb-10 mx-auto text-lg max-w-prose border-gray-300/70 sm:pt-16">
          <Link href="#start" className="relative text-sm font-bold tracking-widest text-red-700 uppercase duration-300 ease-in-out transition-color hover:text-red-500">
            Back to top
          </Link>
        </div>
      </main>
    </div>
    
  )
}
