import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { Providers } from '../components/Providers';

const cairo = Cairo({ 
  subsets: ['arabic'],
  display: 'swap',
  weight: ['400', '600', '700'],
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
      <body className={`${cairo.className}`}>
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
