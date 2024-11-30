
import { ThemeProvider } from "next-themes";
import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";


// تحميل الخطوط مع تحديد الأنماط
const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
});
const tajawal = Tajawal({ 
  subsets: ["arabic"], 
  weight: ["400", "700"],
  display: "swap",
});

import type { Viewport } from 'next'
 
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'seaBlue' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" className="dark" >
      <body className={`${tajawal.className} ${cairo.className}`}>
        <ThemeProvider attribute="class" >
          <ScrollToTop />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
