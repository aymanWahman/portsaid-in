
type Restaurant = {
  id: number;
  name: string;
  region: string;
    address: string;
    cuisine: string[];
    contact: string;
    description: string;
    coords?: number[];
    image: string;
    category: string;

}

const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "مطعم جمبرينا",
    region: "حي العرب",
    address: "شارع الجمهورية،أمام شاطئ بورسعيد",
    cuisine: ["مأكولات بحرية"],
    contact: "0123456789",
    description: "مطعم متخصص في تقديم أشهى المأكولات البحرية الطازجة مع إطلالة على البحر",
    coords: [31, 258, 32, 294],
    image: "/imgs/garden.jpg",
    category: "مطعم",
  },  {
    id: 2,
    name: "مطعم علي بابا",
    region: "حي الشرق",
    address: "شارع الجمهورية،أمام شاطئ بورسعيد",
    cuisine: ["مأكولات بحرية"],
    contact: "0123456789",
    description: "مطعم متخصص في تقديم أشهى المأكولات البحرية الطازجة مع إطلالة على البحر",
    coords: [31, 258, 32, 294],
    image: "/imgs/garden1.jpg",
    category: "مطعم",
  },  {
    id: 3,
    name: "مطعم جمبرينا",
    region: "حي العرب",
    address: "شارع الجمهورية،أمام شاطئ بورسعيد",
    cuisine: ["مأكولات بحرية"],
    contact: "0123456789",
    description: "مطعم متخصص في تقديم أشهى المأكولات البحرية الطازجة مع إطلالة على البحر",
    coords: [31, 258, 32, 294],
    image: "/imgs/garden2.jpg",
    category: "مطعم",
  },
]
export default restaurants;