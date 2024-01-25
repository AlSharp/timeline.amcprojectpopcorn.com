import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/utils/date'

export default function SingleColFeed({opinions}) {
  return (   
    <>   
      {opinions.map((opinion, index) => (
        <article className="md:gap-8 md:grid md:grid-cols-4 mb-8" key={opinion.url}>
          
          {/* Image */}
          <div className="md:col-span-1">
            <Link href={`/opinions/${opinion.url}`} className="relative z-10 block overflow-hidden rounded-2xl md:aspect-w-1 md:aspect-h-1 aspect-w-16 aspect-h-9 group bg-gray-50">
              <Image 
                className="object-cover object-center transition duration-300 ease-in-out rounded-2xl group-hover:scale-110" 
                src={opinion.media} 
                alt={opinion.title}
                layout="fill"
              />
            </Link>
          </div>

          {/* Content */}
          <div className="relative flex flex-col flex-wrap mt-6 md:mt-0 md:col-span-3">
            <div className={`box-border flex flex-col justify-between flex-1 w-full px-6 md:px-0 ${index != opinions.length -1 ? 'pb-8 mb-8 border-b-2 border-gray-100' : ''}`}>
              <div>
                
                <h3 className="mt-2.5 text-xl font-medium leading-tight text-gray-900 transition duration-300 ease-in-out lg:text-xl sm:text-2xl xl:text-2xl decoration-gray-800 decoration-2 hover:underline">
                  <Link href={`/opinions/${opinion.url}`}>
                    <span className="absolute inset-0" aria-hidden="true" />
                    {opinion.title}
                  </Link>
                </h3>
                <p className="block mt-3.5 text-base leading-relaxed text-gray-500">
                  {opinion.description}
                </p>
                <p className="block mt-3.5 text-base leading-relaxed text-gray-500">
                  {opinion.shortText}
                </p>
              </div>

              {/* Article Footer Info */}
              <footer className="flex items-center mt-5 sm:mt-7">

                <div className="text-sm lg:text-[15px] flex items-center">
                  <span className="hidden text-gray-500 sm:inline-block">By&nbsp;</span>
                  <Link href={`${opinion.authorURL.replace(/ /g, '-').toLowerCase()}`} className="relative font-medium text-gray-700 hover:underline mr-4">
                    {opinion.author}
                  </Link>
                  
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  <span className="ml-1 text-gray-500">{opinion.date}</span>
                </div>
              </footer>

            </div>
          </div>

        </article>
      ))}
    </>
  )
}