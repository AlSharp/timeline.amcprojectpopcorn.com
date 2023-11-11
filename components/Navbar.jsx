"use client"
import Link from 'next/link'
// import Image from 'next/image'
import menuLinks from '../config/menus.js'
// import siteConfig from '../config/site.config.js'
import { useRouter } from 'next/navigation'
import { Disclosure } from '@headlessui/react'
import clsx from 'clsx'

export default function Navbar({ bgColor = 'bg-gray-50' }) {

  const router = useRouter();

  return (
    <Disclosure as="header" className={clsx('relative', bgColor)}>
      {({ open }) => (
        <>
          <nav className="flex flex-col xs:flex-row items-center xs:h-18 lg:h-24 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-5">
            
            {/* Main navbar for large screens */}
            <div className="flex h-14 lg:h-[72px] items-center justify-between w-full">

              {/* Logo */}
              <div className="flex h-14 lg:h-[72px] items-center shrink-0">
                {/* <Link href="/">
                  <a className="lg:hidden h-14">
                    <Image 
                      src={siteConfig.logoCropped} 
                      alt={siteConfig.logoText}
                      width={242}
                      height={56}
                      layout="fixed"
                      className="w-12 h-14"
                    />
                  </a>
                </Link> */}
                {/* <Link href="/">
                  <a className="hidden lg:flex h-[72px]">
                    <Image 
                      src={siteConfig.logoFull} 
                      alt={siteConfig.logoText}
                      width={396}
                      height={72}
                      layout="fixed"
                      className="w-auto h-[72px]"
                    />
                  </a>
                </Link> */}
              </div>

              {/* Navigation for large screens */}
              <div className="flex items-center">
                <div className="xs:flex sm:flex-col hidden">
                  <div className="ml-6 hidden md:flex justify-between items-center md:space-x-0.5 lg:space-x-2 text-xl md:text-base">

                    {menuLinks.mainMenu.map((link, index) =>
                      (
                        <Link key={index} href={link.link} className={`px-3 py-1 font-medium text-md ${router.pathname == link.link ? 'text-red-700' : 'text-gray-800 transition duration-300 ease-in-out hover:text-red-700'}`}>
                            {link.name}
                        </Link>
                      )
                    )}

                  </div>
                </div>

                {/* Hamburger menu button */}
                <Disclosure.Button className="flex items-center justify-center p-3 ml-6 transition duration-300 ease-in-out cursor-pointer rounded-xl bg-gray-50 hover:bg-gray-100 md:hidden group focus:outline-none">
                  <span className={`relative w-4 h-3.5 transition duration-500 ease-in-out transform rotate-0 ${open ? 'js-hamburger-open' : ''}`}>
                    <span className="absolute top-0 left-0 block w-full h-0.5 transition duration-300 ease-in-out transform rotate-0 bg-gray-600 rounded-full opacity-100 group-hover:bg-gray-900" />
                    <span className="absolute left-0 block w-full h-0.5 transition duration-300 ease-in-out transform rotate-0 bg-gray-600 rounded-full opacity-100 top-1.5 group-hover:bg-gray-900" />
                    <span className="absolute left-0 block w-full h-0.5 transition duration-300 ease-in-out transform rotate-0 bg-gray-600 rounded-full opacity-100 top-1.5 group-hover:bg-gray-900" />
                    <span className="absolute left-0 block w-full h-0.5 transition duration-300 ease-in-out transform rotate-0 bg-gray-600 rounded-full opacity-100 top-3 group-hover:bg-gray-900" />
                  </span>
                </Disclosure.Button>
              </div>
            </div>
          </nav>

          {/* Mobile menu */}
          <Disclosure.Panel>
            <nav className=" md:hidden" aria-label="Global" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1">

                {menuLinks.mainMenu.map((link, i) =>
                  (
                    <Link href={link.link} key={i} className={`block px-4 py-3 font-medium rounded-lg ${router.pathname == link.link ? 'bg-gray-50 text-red-700' : 'text-gray-800 hover:bg-gray-50 hover:text-red-700 transition duration-300 ease-in-out'}`}>
                        {link.name}
                    </Link>
                  )
                )}
              </div>
            </nav>
          </Disclosure.Panel> 
        </>
      )}
    </Disclosure>

  )
}