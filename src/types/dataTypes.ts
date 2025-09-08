export type DataTypes = {
  id: number;
  name: string;
  nameEn: string;
  region: string;
  regionEn: string;
  address: string;
  addressEn: string;
  cuisine?: string[];
  contact: string;
  description: string;
  descriptionEn: string;
  coordinates?: [number, number];
  image: string;
  category: string;
  categoryEn: string;
  supCategory?: string;
  supCategoryEn?: string;

};

