import Link from 'next/link'
import Image from 'next/image'
import { marked } from 'marked'
import { formatDate } from '@/utils/date.js'
import siteConfig from '@/config/site.config';
import { getOgImageFromEvent } from '@/utils/image'

export default function Event({event, ...params}) {
  const { slug } = params;
  const {
    frontmatter: { title, description, media, mediaType, date },
    content
  } = event;
  let pageUrl = `${siteConfig.baseURL.replace(/\/$|$/, '/')}events/${slug}`
  
  return (
    <article className="pb-12 sm:pb-16 lg:pb-24 bg-gray-50">
      
      {/* Event Header */}
      <header>
       
        {/* Image */}
        <div className="w-full bg-gray-100 aspect-w-3 aspect-h-2 sm:aspect-h-1">
          <Image 
            className="object-cover object-center" 
            src={getOgImageFromEvent(event)} 
            alt={title}
            layout="fill"
          />
        </div>

        {/* Event Header Content */}
        <div className="px-5 lg:px-0">
          
          {/* Article Information */}
          <div className="pt-10 mx-auto text-lg max-w-prose border-gray-300/70 sm:pt-16">
            <Link href="/" className="relative text-sm font-medium tracking-widest text-red-700 uppercase duration-300 ease-in-out transition-color hover:text-red-600">
              Back to timeline
            </Link>
          </div>
          <div className="pt-4 pb-8 mx-auto mb-8 text-lg border-b max-w-prose border-gray-300/70 sm:pt-6">
            <h1 className="mt-3.5 text-4xl font-medium tracking-normal text-gray-900 transition duration-300 ease-in-out sm:mt-5 decoration-red-300 decoration-3 group-hover:underline md:tracking-tight sm:leading-tight sm:text-5xl lg:text-6xl">{title}
            </h1>
            <div>
              <p className="mt-4 text-base leading-loose text-gray-600">
                {description}
              </p>
            </div>

            {/* Author meta */}
            <div className="flex items-center mt-6 sm:mt-8">
              <div className="text-sm lg:text-[15px] flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
                <span className="ml-1 text-gray-500">{formatDate(date)}</span>
              </div>
            </div>
          </div>

        </div>
        
      </header>

      <div className="px-5 lg:px-0">
        
        {/* Event Content */}
        {/* Uses the official Tailwind CSS Typography plugin */}
        <div className="mx-auto prose sm:prose-lg hover:prose-a:text-red-700 prose-a:duration-300 prose-a:ease-in-out prose-a:transition prose-img:rounded-xl first-letter:text-4xl first-letter:font-bold first-letter:tracking-[.15em]" dangerouslySetInnerHTML={{ __html: marked.parse(content) }}>
        </div>

        {/* Event Footer */}
        <footer className="mx-auto mt-12 text-lg divide-y sm:mt-14 max-w-prose divide-y-gray-300/70">

          {/* Social Share Buttons */}
          <div className="py-8 sm:py-10">
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-gray-900">
                Share
              </span>

              {/* Social Links */}
              <ul className="flex items-center space-x-3">
               
                {/* Twitter */}
                <li>
                  <a 
                    href={`https://twitter.com/intent/tweet?text=🚨AMC APE Post🚀 - ${title}&url=${pageUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 transition duration-300 ease-in-out bg-transparent border rounded-full border-gray-300/70 sm:w-12 sm:h-12 group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-700 transition duration-300 ease-in-out transform group-hover:text-red-700 group-hover:scale-110" viewBox="0 0 512 512" fill="currentColor">
                      <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z" />
                    </svg>
                  </a>
                </li>
                
                {/* Facebook */}
                <li>
                  <a 
                    href={`https://www.facebook.com/sharer.php?u=${pageUrl}&quote=${title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 transition duration-300 ease-in-out bg-transparent border rounded-full border-gray-300/70 sm:w-12 sm:h-12 group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-700 transition duration-300 ease-in-out transform group-hover:text-red-700 group-hover:scale-110" viewBox="0 0 512 512" fill="currentColor">
                      <path xmlns="http://www.w3.org/2000/svg" d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z" fillRule="evenodd" />
                    </svg>
                  </a>
                </li>
               
                {/* Linkedin */}
                <li>
                  <a 
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center w-10 h-10 transition duration-300 ease-in-out bg-transparent border rounded-full border-gray-300/70 sm:w-12 sm:h-12 group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-700 transition duration-300 ease-in-out transform group-hover:text-red-700 group-hover:scale-110" viewBox="0 0 512 512" fill="currentColor">
                      <path xmlns="http://www.w3.org/2000/svg" d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
                    </svg>
                  </a>
                </li>
                
              </ul>
              
            </div>
          </div>

        </footer>
        
      </div>
    </article>
  )
}