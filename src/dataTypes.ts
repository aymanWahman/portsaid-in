export type DataTypes = {
  id: number;
  name: string;
  region: string;
  address: string;
  cuisine?: string[];
  contact: string;
  description: string;
  coords?: [number, number];
  image: string;
  category: string;
};
