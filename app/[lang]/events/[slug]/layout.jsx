// import Navbar from './Navbar';
// import Footer from './Footer';
// import Script from 'next/script';
import Image from 'next/legacy/image'

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

      <footer>
        <div className="w-full bg-gray-100 aspect-w-3 aspect-h-1 sm:aspect-w-4 sm:aspect-h-1 md:aspect-w-5 md:aspect-h-1">
          <Image 
            className="object-cover object-center" 
            src="https://s3fkf-public.s3.us-east-2.amazonaws.com/images/go_apes_2400x480.png"
            alt="Apes Together Strong"
            layout="fill"
          />
        </div>
      </footer>
    </>
  );
}