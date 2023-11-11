import Script from 'next/script';
import Navbar from '@/components/Navbar';

export default function Layout({
  children,
}) {
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

      <Navbar />

      {children}
    </>
  );
}