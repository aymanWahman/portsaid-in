import { cache } from "@/lib/cache";
import { db } from "@/lib/prisma";

export const getPlaces = cache(
  () => {
    const places = db.places.findMany({
      orderBy: {
        order: "asc",
      },
    });
    return places;
  },
  ["categories"],
  { revalidate: 3600 }
);
