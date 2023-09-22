// import Navbar from './Navbar';
// import Footer from './Footer';
// import Script from 'next/script';

export default function Layout({
  children,
}) {
  return (
    <>
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-TGZE905KJF"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-TGZE905KJF');
        `}
      </Script> */}

      {/* <Navbar /> */}

      {children}

      {/* <Footer /> */}
    </>
  );
}