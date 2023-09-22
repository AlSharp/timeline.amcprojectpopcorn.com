import './globals.css'
import { Inter } from 'next/font/google'
import classNames from 'classnames'

const inter = Inter({ subsets: ['latin'] })

export const generateMetadata = async ({ params }) => {
  const { lang } = params;
  return {
    title: 'AMC Project Popcorn',
    description: 'AMC Project Popcorn',
    metadataBase: 'https://amcprojectpopcorntimeline.blockberrypi.com'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={classNames(inter.className)}>{children}</body>
    </html>
  )
}
