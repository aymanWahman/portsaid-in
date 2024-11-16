
type Hotel = {
  id: number;
  name: string;
  region: string;
  address: string;
  cuisine?: string[];
  contact: string;
  description: string;
  coords?: number[];
  image: string;
  category: string;
}

const hotels:Hotel[] = [
  {
    id: 1,
    name: " فندق هلنان بورفؤاد",
    region: "بورفؤاد ",
    address: "شارع الجمهورية،أمام شاطئ بورسعيد",
    cuisine: ["  "],
    contact: "0123456789",
    description: " إطلالة على البحر",
    coords: [31, 258, 32, 294],
    image: "/imgs/helnan.jpg",
    category: "فندق",
  },  {
    id: 2,
    name: "فندق ريستا ",
    region: "حي الشرق",
    address: "شارع الجمهورية،أمام شاطئ بورسعيد",
    cuisine: [" "],
    contact: "0123456789",
    description: " إطلالة على البحر",
    coords: [31, 258, 32, 294],
    image: "/imgs/hotel.jpg",
    category: "فندق",
  },  {
    id: 3,
    name: "فندق جراند أوتيل ",
    region: " ",
    address: "شارع الجمهورية،أمام شاطئ بورسعيد",
    cuisine: ["  "],
    contact: "0123456789",
    description: "فندق متخصص في تقديم أشهى المأكولات البحرية الطازجة مع إطلالة على البحر",
    coords: [31, 258, 32, 294],
    image: "/imgs/hotel4.jpg",
    category: "فندق",
  },
]
export default hotels;