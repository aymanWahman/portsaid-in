// import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { Providers } from '../components/Providers';
import { Tajawal } from "next/font/google"; // استيراد الخطوط


// const cairo = Cairo({ subsets: ["latin"], weight: "700" }); // خط الإنجليزي
const tajawal = Tajawal({ subsets: ["arabic"], weight: "400" }); // خط العربي



export const metadata = {
  title: 'بورسعيد',
  description: 'اكتشف جمال وسحر مدينة بورسعيد، بوابة مصر الشرقية وتاريخها العريق',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <body className={tajawal.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
