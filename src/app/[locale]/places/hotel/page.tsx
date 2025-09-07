import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";

import HotelPageClient from "./HotelClient"; // استيراد المكون الأصلي

export default async function HotelPage() {
  const locale = await getCurrentLocale();
  const translations = await getTrans(locale);

  return <HotelPageClient translations={translations} />;
}