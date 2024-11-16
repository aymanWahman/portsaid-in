
type Beach = {
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

const beaches: Beach[] = [
  {
    id: 1,
    name: " شاطئ بورفؤاد",
    region: "بورفؤاد ",
    address: "شارع الجمهورية،أمام شاطئ بورسعيد",
    cuisine: [" شاطئ خاص"],
    contact: "0123456789",
    description: "مطعم متخصص في تقديم أشهى المأكولات البحرية الطازجة مع إطلالة على البحر",
    coords: [31, 258, 32, 294],
    image: "/imgs/portsaid2.jpg",
    category: "شاطئ",
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
    name: "شاطئ بورتو ",
    region: " ",
    address: "شارع الجمهورية،أمام شاطئ بورسعيد",
    cuisine: [" شاطئ بورتو"],
    contact: "0123456789",
    description: "مطعم متخصص في تقديم أشهى المأكولات البحرية الطازجة مع إطلالة على البحر",
    coords: [31, 258, 32, 294],
    image: "/imgs/garden2.jpg",
    category: "شاطئ",
  },
]
export default beaches;