import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
import { Translations } from "@/types/translations";
import restaurants from "@/data/DataRestaurant";
import RestaurantClient from "./RestaurantClient";

// هذا المكون الآن أصبح Server Component بالكامل
const RestaurantPage = async () => {
  const locale = await getCurrentLocale();
  const translations: Translations = await getTrans(locale);

  return <RestaurantClient translations={translations} restaurants={restaurants} />;
};

export default RestaurantPage;