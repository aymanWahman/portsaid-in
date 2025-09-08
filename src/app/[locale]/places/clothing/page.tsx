import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
import { Translations } from "@/types/translations";
import ClothClient from "./ClothClient";

// هذا المكون الآن أصبح Server Component بالكامل
const ClothPage = async () => {
  const locale = await getCurrentLocale();
  const translations: Translations = await getTrans(locale);

  return <ClothClient translations={translations} />;
};

export default ClothPage;