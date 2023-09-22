import './globals.css'
import { Inter } from 'next/font/google'
import classNames from 'classnames'

const inter = Inter({ subsets: ['latin'] })

export const generateMetadata = async ({ params }) => {
  const { lang } = params;
  return {
    title: 'AMC Project Popcorn Timeline',
    description: 'The entire story of retail investors who were robbed by CEO of AMC',
    metadataBase: 'https://amcprojectpopcorntimeline.blockberrypi.com',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    authors: [{ name: 'AMC Project Popcorn' }],
    metadataBase: new URL('https://amcprojectpopcorntimeline.blockberrypi.com'),
    openGraph: {
      title: 'AMC Project Popcorn Timeline',
      description: 'The entire story of retail investors who were robbed by CEO of AMC',
      url: 'https://amcprojectpopcorntimeline.blockberrypi.com',
      siteName: 'AMC Project Popcorn',
      images: 'https://img.youtube.com/vi/RoUhtzRe7rs/0.jpg',
      locale: lang,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'AMC Project Popcorn Timeline',
      description: 'The entire story of retail investors who were robbed by CEO of AMC',
      images: ['https://img.youtube.com/vi/RoUhtzRe7rs/0.jpg']
    }
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={classNames(inter.className)}>{children}</body>
    </html>
  )
}
