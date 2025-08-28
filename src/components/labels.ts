import { PlaceCategory, Region } from "@prisma/client";

export const CATEGORY_LABELS: Record<PlaceCategory, { ar: string; en: string }> = {
  HOTEL:      { ar: "الفنادق",   en: "Hotel" },
  RESTAURANT: { ar: "المطاعم",   en: "Restaurant" },
  BEACH:      { ar: "الشواطئ",   en: "Beach" },
  PARK:       { ar: "الحدائق",   en: "Park" },
};

export const REGION_LABELS: Record<Region, { ar: string; en: string }> = {
  PORT_FOUAD_CITY: { ar: "مدينة بورفؤاد", en: "Port Fouad City" },
  AL_ARAB:         { ar: "العرب",          en: "Al Arab" },
  AL_MANAKH:       { ar: "المناخ",         en: "Al Manakh" },
  AL_DAWAHI:       { ar: "الضواحي",        en: "Al Dawahi" },
  AL_SHARQ:        { ar: "الشرق",          en: "Al Sharq" },
  AL_ZOHOR:        { ar: "الزهور",         en: "Al Zohor" },
  AL_GANOB:        { ar: "الجنوب",         en: "Al Ganob" },
};
