import { Place } from "@prisma/client";
import EditPlace from "./EditPlace";
import DeletePlace from "./DeletePlace";

function PlaceItem({ place }: { place: Place }) {
  return (
    <li className="bg-gray-300 p-4 rounded-md flex justify-between">
      <div>
        <h3 className="text-black font-medium text-lg">{place.name}</h3>
        <p className="text-sm text-gray-700">{place.address}</p>
        <p className="text-sm">{place.category} - {place.region}</p>
      </div>
      <div className="flex items-center gap-2">
        <EditPlace place={place} />
        <DeletePlace id={place.id} />
      </div>
    </li>
  );
}

export default PlaceItem;
