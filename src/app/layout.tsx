
import { ThemeProvider } from "next-themes";
import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

// تحميل الخطوط مع تحديد الأنماط
const cairo = Cairo({ subsets: ["latin"], weight: ["400", "700"] });
const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400", "700"] });

export const metadata = {
  title: "Portsaid-in",
  description:
    "Knowing everything about Portsaid, including its beaches, museums, restaurants, and more.",
  keywords:
    "Portsaid, Port, Beaches, Sea, Museum, Restaurant, Hotel, Garden, بورسعيد, حجز, صيف, مطاعم, ملابس",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" className="dark">
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
