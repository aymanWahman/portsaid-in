import Link from "@/components/link";
import { Routes } from "@/constants/enums";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import apartments from "@/data/DataApartments";
import Image from "next/image";

async function apartment() {
  const locale = await getCurrentLocale();
  const { realEstate } = await getTrans(locale);
  return (
    <main className="container mt-24">
      <section className="">
        <div className="flex items-center">
          <span className="text-4xl">🏠</span>
          <Link href={`/${locale}/${Routes.REAL_ESTATE}`}>
            <p className="p-6">{realEstate.title} </p>
          </Link>
        </div>
      </section>

      <section className=" grid grid-cols-3 gap-6 text-center">
        {apartments.map((a) => (
          <Card key={a.id} className="rounded-2xl shadow-md">
            <CardHeader>
              <CardTitle>{realEstate.APARTMENT}</CardTitle>
            </CardHeader>
            <CardContent className="">
              <Image
                src={a.image}
                width={360}
                height={200}
                alt={a.name}
                className="mx-auto w-300 h-200"
              />
            </CardContent>

            <CardContent>
              <p className="text-sm px-8">{a.description} </p>
            </CardContent>
            <CardFooter className="flex gap-6 items-center justify-center">
              <p>{a.region}</p>
              <p>{a.contact}</p>
            </CardFooter>
          </Card>
        ))}
      </section>
    </main>
  );
}

export default apartment;
