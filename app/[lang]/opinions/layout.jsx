import { Inter } from 'next/font/google'
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export const generateMetadata = async ({ params }) => {
  const { lang } = params;
  return {
    title: 'AMC APE Post: Retail Investors For Transparency',
    description: 'Facts: Not Imagined Schemes',
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
      description: 'Facts: Not Imagined Schemes',
      url: 'https://amcapepost.com',
      siteName: 'AMC APE Post',
      images: 'https://s3fkf-public.s3.us-east-2.amazonaws.com/images/facts_not_imagined_schemes.png',
      locale: lang,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'AMC APE Post: Retail Investors For Transparency',
      description: 'Facts: Not Imagined Schemes',
      images: ['https://s3fkf-public.s3.us-east-2.amazonaws.com/images/facts_not_imagined_schemes.png']
    }
  }
}

export default function OpinionsLayout({ children }) {
  return (
    <>
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
    </>
  )
}
