"use client";

import Image from "next/image";

import beaches from "@/components/DataBeach";
export default function Restaurant() {


  return (
    <div className="mt-20 md:mt-24 shadow-xl">
      <h1 className="text-center text-xl mb-3">الشواطئ في بورسعيد</h1>


      <section>
        {beaches &&
          beaches.map((d) => (
            <div
              key={d.id}
              className="grid grid-cols-1 md:grid-cols-3 mb-3 place-items-center md:gap-2"
            >
              <div className="">
                <h1 className="text-center font-bold text-2xl mb-4 text-seaBlue">
                  {d.name}
                </h1>

                <Image
                  className="rounded shadow-2xl shadow-black mb-2 w-64 h-56"
                  src={d.image}
                  alt={d.name}
                  width="260"
                  height="130"
                  priority
                />
              </div>

              <div
                dir="rtl"
                className="col-span-2 p-3 mx-auto shadow-2xl shadow-black space-y-3  "
              >
                <p className="text-center text-lg text-gray-500  ">
                  ({d.cuisine})
                </p>
                <p className="text-center text-xl font-bold ">
                  {d.description}
                </p>
                <p className="text-center text-lg font-bold "> {d.address} </p>
                <p className="text-center text-lg font-bold ">
                  Mob:{d.contact}
                </p>
                {/* <p className='text-center text-xl font-bold '>{r.coords}</p> */}
              </div>
            </div>
          ))}
      </section>
    </div>
  );
}
