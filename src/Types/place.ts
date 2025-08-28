// types/place.ts
export interface Place {
  id: string;
  name: string;
  description: string;
  image: string;
  region: string;
  address?: string;
  phone?: string;
  rating?: number;
  category?: string;
}
