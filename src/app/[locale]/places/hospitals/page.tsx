import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
import { Translations } from "@/types/translations";
import HospitalClient from "./HospitalClient";

// هذا المكون الآن أصبح Server Component بالكامل
const HospitalPage = async () => {
  const locale = await getCurrentLocale();
  const translations: Translations = await getTrans(locale);

  return <HospitalClient translations={translations} />;
};

export default HospitalPage;