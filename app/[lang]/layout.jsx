import './globals.css'
import { Inter } from 'next/font/google'
import clsx from 'clsx'
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export const generateMetadata = async ({ params }) => {
  const { lang } = params;
  return {
    title: 'AMC APE Post: Retail Investors For Transparency',
    description: 'The entire story of retail investors who were robbed by CEO of AMC',
    metadataBase: 'https://amcapepost.com',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    authors: [{ name: 'AMC Project Popcorn' }],
    metadataBase: new URL('https://amcapepost.com'),
    openGraph: {
      title: 'AMC APE Post: Retail Investors For Transparency',
      description: 'The entire story of retail investors who were robbed by CEO of AMC',
      url: 'https://amcapepost.com',
      siteName: 'AMC APE Post',
      images: 'https://s3fkf-public.s3.us-east-2.amazonaws.com/images/go_apes.png',
      locale: lang,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'AMC APE Post: Retail Investors For Transparency',
      description: 'The entire story of retail investors who were robbed by CEO of AMC',
      images: ['https://s3fkf-public.s3.us-east-2.amazonaws.com/images/go_apes.png']
    }
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.className)}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HR38LKTEGG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-HR38LKTEGG');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
