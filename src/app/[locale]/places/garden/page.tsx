import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
import { Translations } from "@/types/translations";
import GardenClient from "./GardenClient";

// هذا المكون الآن أصبح Server Component بالكامل
const GardenPage = async () => {
  const locale = await getCurrentLocale();
  const translations: Translations = await getTrans(locale);

  return <GardenClient translations={translations} />;
};

export default GardenPage;