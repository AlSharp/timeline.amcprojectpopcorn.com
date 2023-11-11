import Link from 'next/link'
import Image from 'next/image'
import siteConfig from '../config/site.config.js'
// import socialLinks from '../config/social.js'
import MenuLinks from '../config/menus.js'
// import { getSocialIconComponent } from '../../utils/getSocialIconComponent'

export default function Footer() {
  return (
    <footer className="bg-[#68C8DD]">
      <div className="pt-12">

        {/* Footer Links Container */}
        <div className="flex flex-col items-center justify-between xs:h-16 lg:h-20 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          
          {/* Footer Links */}
          <nav className="flex flex-wrap items-center justify-center -mx-5 -my-2 md:justify-start" aria-label="Footer">
            {MenuLinks.footer.map((item) => (
              <Link key={item.name} href={item.link} className="px-12 py-2 text-base text-gray-800 transition duration-300 ease-in-out hover:text-red-700">
                  {item.name}
              </Link>
            ))}
          </nav>

          {/* Copyright Text */}
          <div>
            <p className="flex items-center justify-center mt-8 ml-0 text-base text-grey-800 shrink-0 md:mt-0">
              {siteConfig.copyright}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-100 aspect-w-3 aspect-h-1 sm:aspect-w-4 sm:aspect-h-1 md:aspect-w-5 md:aspect-h-1">
        <Image 
          className="object-cover object-center" 
          src="https://s3fkf-public.s3.us-east-2.amazonaws.com/images/go_apes_2400x480.png"
          alt="Apes Together Strong"
          layout="fill"
        />
      </div>
    </footer>

  )
}