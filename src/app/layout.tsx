import { Providers } from '@/components/Providers';
import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: 'swap',
});

const tajawal = Tajawal({
  weight: ["400", "500", "700"],
  subsets: ["arabic"],
  variable: "--font-tajawal",
  display: 'swap',
});

export const metadata = {
  title: "بورسعيد",
  description: "دليلك الشامل لمدينة بورسعيد",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" suppressHydrationWarning className="light">
      <body className={`${tajawal.variable} ${cairo.variable} transition-colors duration-200`}>
        <Providers>
          <Header />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}