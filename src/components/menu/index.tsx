import getTrans from "@/lib/translation";
import MenuItem from "./MenuItem";
import { ProductWithRelations } from "@/types/product";
import { getCurrentLocale } from "@/lib/getCurrentLocale";

async function Menu({ items }: { items: ProductWithRelations[] }) {
  const locale = await getCurrentLocale();
  const { noPlacesFound } = await getTrans(locale);
  return items.length > 0 ? (
    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  ) : (
    <p className="text-accent text-center">{noPlacesFound}</p>
  );
}

export default Menu;
