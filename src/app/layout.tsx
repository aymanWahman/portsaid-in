'use client';

import { ThemeProvider } from "next-themes";
import { Cairo, Tajawal } from "next/font/google"; // استيراد الخطوط
import "./globals.css";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
// import { SessionProvider } from "next-auth/react";
import Head from 'next/head';

// تحميل الخطوط
const cairo = Cairo({ subsets: ["latin"], weight: "700" }); // خط الإنجليزي
const tajawal = Tajawal({ subsets: ["arabic"], weight: "400" }); // خط العربي



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cairo.className}>
       <Head>
        <title>Portsaid-in</title>
        <meta name="description" content="Knowing everything about portsaid, and more." />
        <meta name="keywords" content="Portsaid, Port, Beaches, Sea, Museum, Restaurant, Hotel, Garden, بورسعيد, حجز, صيف,مطاعم, ملابس" />
      </Head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark"> 
           {/* <SessionProvider> */}
            <Header />
            <main className={tajawal.className}>
              {children}
            </main>
            {/* تطبيق خط Tajawal للنصوص العربية */}
            <Footer />
          {/* </SessionProvider>  */}
        </ThemeProvider>
      </body>
    </html>
  );
}


