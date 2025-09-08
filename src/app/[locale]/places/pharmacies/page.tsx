import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
import { Translations } from "@/types/translations";
import PharmacyClient from "./PharmacyClient";

// هذا المكون الآن أصبح Server Component بالكامل
const PharmacyPage = async () => {
  const locale = await getCurrentLocale();
  const translations: Translations = await getTrans(locale);

  return <PharmacyClient translations={translations} />;
};

export default PharmacyPage;