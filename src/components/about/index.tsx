// import { Languages } from "@/constants/enums";
import MainHeading from "../main-heading";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
import Image from "next/image";
import data from "@/data/DataAboutPort";

async function About() {
  const locale = await getCurrentLocale();
  const { home } = await getTrans(locale);
  const { about } = home;
  return (
    <section
      className="section-gap"
      // dir={locale === Languages.ARABIC ? "rtl" : "ltr"}
    >
      <div className="container text-center">
        <MainHeading subTitle={about.ourStory} title={about.aboutUs} />
        {/* <section dir="rtl" className="p-3 text-center">
        <h2 className="text-2xl font-bold">عن بورسعيد</h2>
        <p className="mt-4 text-gray-600">بورسعيد مدينة ساحلية جميلة ذات تاريخ وثقافة غنية، تتميز بموقعها الجغرافي وتاريخها الرائع.</p>
      </section> */}
        {data &&
          data.map((d) => (
            <main
              key={d.id}
              className="grid grid-cols-1 md:grid-cols-2 element-center section-gap"
            >
              <div className="">
                <Image
                  src= {d.image!}
                  alt={d.title}
                  width="460"
                  height="360"
                  priority
                  className="rounded shadow-2xl shadow-black w-[350px] h-[250px] mx-auto"
                />
              </div>

              <div dir="rtl" className="">
                <h1 className="text-center font-bold text-2xl md:text-4xl md:mt-8 text-primary">
                  {d.title}
                </h1>
                <p className="text-center text-lg md:text-xl  ">
                  {d.description}
                </p>
                <p className="text-center text-lg md:text-xl  ">{d.history}</p>
              </div>
            </main>
          ))}
      </div>
    </section>
  );
}

export default About;
