import beaches from "@/data/DataBeach";
import Image from "next/image";
import Link from "next/link";
import { Routes } from "@/constants/enums";
import getTrans from "@/lib/translation";
import { getCurrentLocale } from "@/lib/getCurrentLocale";

const BeachPage = async () => {
  const locale = await getCurrentLocale();

  const translations = await getTrans(locale);

  // const [filter, setFilter] = useState<string>("All");

  // const filteredRestaurants =
  //   filter === "All"
  //     ? beaches
  //     : beaches.filter(
  //         (beach) => beach.region === filter || beach.category === filter
  //       );

  // const uniqueRegions = Array.from(new Set(beaches.map((d) => d.region)));

  return (
    <div className="p-4 mt-20">
      <div className="text-center">
        <Link
          href={`/${locale}/${Routes.PLACES}`}
          className="text-xl  text-primary  hover:text-secondary transition"
        >
          {translations.places.title}
        </Link>
      </div>
      <h1 className="text-center text-2xl font-bold mt-3 mb-4 text-primary">
        {translations.places.BEACH}
      </h1>

      {/* فلتر */}
      {/* <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setFilter("All")}
          className={`px-4 py-2 rounded ${
            filter === "All" ? "bg-seaBlue text-white" : "bg-gray-500"
          }`}
        >
          الكل
        </button>
        {uniqueRegions.map((region) => (
          <button
            key={region}
            onClick={() => setFilter(region)}
            className={`px-4 py-2 rounded ${
              filter === region ? "bg-seaBlue text-white" : "bg-gray-500"
            }`}
          >
            {region}
          </button>
        ))}
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {beaches.map((d) => (
          <div
            key={d.id}
            className="border rounded-lg overflow-hidden shadow-2xl bg-seagullGray"
          >
            <Image
              src={d.image}
              alt={d.name}
              className="w-full h-40 object-cover"
              width="300"
              height="200"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-seaBlue">{d.name}</h2>
              <p className="text-gray-500">{d.description}</p>

              <p className="text-sm text-gray-700">
                <strong>المنطقة:</strong> {d.region}
              </p>
              <p className="text-gray-700">
                <strong>التصنيف:</strong> {d.category}
              </p>
              <p className="text-sm text-gray-700">
                <strong>العنوان:</strong> {d.address}
              </p>
              {/* <p className="text-gray-700">
                <strong>التلفون:</strong> {d.contact}
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeachPage;
