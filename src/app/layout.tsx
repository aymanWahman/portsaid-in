import type { Metadata } from 'next';
import { Noto_Kufi_Arabic } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Providers } from '@/components/Providers';

const notoKufiArabic = Noto_Kufi_Arabic({ 
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-noto-kufi-arabic',
});

export const metadata: Metadata = {
  title: 'بورسعيد - بوابة مصر الشرقية',
  description: 'اكتشف جمال وسحر مدينة بورسعيد، بوابة مصر الشرقية وتاريخها العريق',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <body className={`${notoKufiArabic.variable} font-noto-kufi`}>
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