import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
import { Translations } from "@/types/translations";
import BeachClient from "./BeachClient";

// هذا المكون الآن أصبح Server Component بالكامل
const BeachPage = async () => {
  const locale = await getCurrentLocale();
  const translations: Translations = await getTrans(locale);

  return <BeachClient translations={translations} />;
};

export default BeachPage;