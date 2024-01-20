import Image from 'next/legacy/image'
import { getOpinions } from "@/libs/getOpinions";
import { formatDate } from "@/utils/date";
import { parse, compareAsc } from "date-fns";
import SingleColFeed from '@/components/SingleColFeed';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default async function Opinions({ params: { lang } }) {

  const staticData = await getOpinions(lang);

  const opinions = staticData
    .sort((a, b) => compareAsc(
      parse(a.frontmatter.date, 'MM/dd/yyyy', new Date()),
      parse(b.frontmatter.date, 'MM/dd/yyyy', new Date())
    ))
    .map(opinion => {
      return {
        title: opinion.frontmatter.title,
        description: opinion.frontmatter.description,
        date: formatDate(opinion.frontmatter.date),
        media: opinion.frontmatter.media,
        shortText: opinion.frontmatter.shortText,
        url: `/${opinion.slug}`,
        author: opinion.frontmatter.author
      }
    })

  return (
    <div>
      <Navbar bgColor='bg-[#68C8DD]'/>
      <header>
        <div className="hidden md:block w-full bg-gray-100 aspect-w-2 aspect-h-1 sm:aspect-w-3 sm:aspect-h-1 md:aspect-w-4 md:aspect-h-1">
          <Image 
            className="object-cover object-center" 
            src="https://s3fkf-public.s3.us-east-2.amazonaws.com/images/facts_not_imagined_schemes.png"
            alt="Apes Together Strong"
            layout="fill"
          />
        </div>
        <div className="md:hidden w-full bg-gray-100 aspect-w-2 aspect-h-1 sm:aspect-w-3 sm:aspect-h-1 md:aspect-w-4 md:aspect-h-1">
          <Image 
            className="object-cover object-center" 
            src="https://s3fkf-public.s3.us-east-2.amazonaws.com/images/facts_not_imagined_schemes_mobile.png"
            alt="Apes Together Strong"
            layout="fill"
          />
        </div>
      </header>
      <main className="bg-gray-50">
        <div className="relative max-w-xl px-4 py-12 mx-auto lg:max-w-screen-xl sm:py-16 lg:py-24 sm:px-12 md:max-w-3xl lg:px-8">
          <div className="w-full mb-20">
            <SingleColFeed opinions={opinions} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
    
  )
}
