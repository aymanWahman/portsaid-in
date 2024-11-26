'use client';

import { ThemeProvider } from "next-themes";
import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import ScrollToTop from "@/components/ScrollToTop";

// تحميل الخطوط مع تحديد الأنماط
const cairo = Cairo({ subsets: ["latin"], weight: ["400", "700"] });
const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400", "700"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    
    <html lang="ar" >
      {/* تحسين تعريف الميتا تاغز */}
      <Head>
        <title>Portsaid-in</title>
        <meta
          name="description"
          content="Knowing everything about Portsaid, including its beaches, museums, restaurants, and more."
        />
        <meta
          name="keywords"
          content="Portsaid, Port, Beaches, Sea, Museum, Restaurant, Hotel, Garden, بورسعيد, حجز, صيف, مطاعم, ملابس"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={`${tajawal.className} ${cairo.className}`}>
        <ThemeProvider attribute="class"  defaultTheme="dark">
        <ScrollToTop />
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
