import { db } from "@/lib/prisma";
import PlaceItem from "./_components/PlaceItem";
import Form from "./_components/Form";
import getTrans from "@/lib/translation";
import { Locale } from "@/i18n.config";

async function PlacesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const locale = (await params).locale;
  const translations = await getTrans(locale);
  const places = await db.place.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <main>
      <section className="section-gap">
        <div className="container">
          <div className="sm:max-w-[625px] mx-auto space-y-6">
            <Form translations={translations} />
            {places.length > 0 ? (
              <ul className="flex flex-col gap-4">
                {places.map((place) => (
                  <PlaceItem key={place.id} place={place} />
                ))}
              </ul>
            ) : (
              <p className="text-accent text-center py-10">
                {translations.noPlacesFound}
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default PlacesPage;
