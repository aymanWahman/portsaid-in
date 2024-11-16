'use client'

// import Image from "next/image";
// import Link from "next/link";
import MapPage from '@/components/map';
import 'leaflet/dist/leaflet.css';
import LocationsList from "@/components/LocationsList";
import { SetStateAction, useState } from "react";

export default function Garden() {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const handleRegionClick = (region: SetStateAction<null>) => {
  setSelectedRegion(region);
}

  return (
    <div className="mt-20 md:mt-24 shadow-xl">
      
    

    <section className="grid grid-col-1 md:grid-cols-2 gap-4 p-4 place-items-center">
    <div className="h-full">
      <MapPage selectedRegion={selectedRegion}/>
    </div>
    <div className="">
      <LocationsList onRegionClick={handleRegionClick} />
    </div>
    </section>
    
    </div>
  );
}



