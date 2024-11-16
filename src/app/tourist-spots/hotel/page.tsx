"use client";

import Image from "next/image";
// import Link from "next/link";
// import MapPage from '@/components/map';
import "leaflet/dist/leaflet.css";
// import LocationsList from "@/components/LocationsList";
// import { SetStateAction, useState } from "react";
import hotels from "@/components/DataHotel";
export default function Restaurant() {
  // const [selectedRegion, setSelectedRegion] = useState(null);

  //   const handleRegionClick = (region: SetStateAction<null>) => {
  //   setSelectedRegion(region);
  // }

  return (
    <div className="mt-20 md:mt-24 shadow-xl">
      <h1 className="text-center text-xl mb-3">الفنادق في بورسعيد</h1>


      <section>
        {hotels &&
          hotels.map((r) => (
            <div
            dir="rtl"
              key={r.id}
              className="grid grid-cols-1 md:grid-cols-3 mb-3 place-items-center md:gap-2"
            >
              <div className="">
                <h1 className="text-center font-bold text-2xl mb-4 text-seaBlue">
                  {r.name}
                </h1>

                <Image
                  className="rounded shadow-2xl shadow-black mb-2 w-64 h-56"
                  src={r.image}
                  alt={r.name}
                  width="260"
                  height="130"
                  priority
                />
              </div>

              <div
                dir="rtl"
                className="col-span-2 p-3 mx-auto shadow-2xl shadow-black space-y-3  "
              >
                {/* <p className="text-center text-lg text-gray-500  ">
                  ({r.cuisine})
                </p> */}
                <p className="text-center text-xl font-bold ">
                  {r.description}
                </p>
                <p className="text-center text-lg font-bold "> {r.address} </p>
                <p className="text-center text-lg font-bold ">
                  Mob:{r.contact}
                </p>
                {/* <p className='text-center text-xl font-bold '>{r.coords}</p> */}
              </div>
            </div>
          ))}
      </section>
    </div>
  );
}
