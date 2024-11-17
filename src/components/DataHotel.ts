import { DataTypes } from '../dataTypes';

const hotels: DataTypes[] = [
  {
    id: 1,
    name: "فندق جراند",
    region: "حي العرب",
    address: "شارع الجمهورية، بجوار الميناء",
    contact: "01012345678",
    description: "فندق فاخر يوفر إقامة مميزة مع إطلالة على البحر وخدمات عالية الجودة.",
    coords: [31.265, 32.3018],
    image: "/imgs/hotel4.jpg",
    category: "فندق",
  },
  {
    id: 2,
    name: "فندق الشرق",
    region: "حي الشرق",
    address: "شارع النهضة، بالقرب من محطة القطار",
    contact: "01234567890",
    description: "فندق يقدم خدمات راقية بأسعار تناسب الجميع، مناسب للعائلات ورجال الأعمال.",
    coords: [31.257, 32.295],
    image: "/imgs/hotel2.jpg",
    category: "فندق",
  },
  {
    id: 3,
    name: "فندق السلام",
    region: "حي الزهور",
    address: "شارع 23 يوليو، بالقرب من الحديقة الدولية",
    contact: "01122334455",
    description: "فندق يقدم خدمات إقامة بسيطة ومناسبة للعائلات مع موقع قريب من الحدائق والمرافق العامة.",
    coords: [31.250, 32.305],
    image: "/imgs/hotel1.jpg",
    category: "فندق",
  },
  {
    id: 4,
    name: "فندق النورس",
    region: "حي المناخ",
    address: "شارع طرح البحر، بجوار النادي الاجتماعي",
    contact: "01098765432",
    description: "فندق اقتصادي يوفر إقامة مريحة وخدمات أساسية مع إطلالة مباشرة على البحر.",
    coords: [31.270, 32.290],
    image: "/imgs/hotel3.jpg",
    category: "فندق",
  },
  {
    id: 5,
    name: "فندق بورتو سكاي",
    region: "حي الشرق",
    address: "شارع 6 أكتوبر، بجوار محطة الحافلات",
    contact: "01512345678",
    description: "فندق عصري مع خدمات فاخرة تشمل مسبحًا داخليًا ومركزًا للياقة البدنية.",
    coords: [31.258, 32.310],
    image: "/imgs/hotel5.jpg",
    category: "فندق",
  },
  {
    id: 6,
    name: "فندق الميناء",
    region: "بورفؤاد",
    address: "كورنيش بورفؤاد، بجوار النادي البحري",
    contact: "01099887766",
    description: "فندق صغير يقدم تجربة إقامة دافئة مع إطلالة على الميناء.",
    coords: [31.245, 32.320],
    image: "/imgs/hotel6.jpg",
    category: "فندق",
  },
  {
    id: 7,
    name: "فندق البحر الأبيض",
    region: "حي العرب",
    address: "شارع بورسعيد الدولي، بالقرب من الممشى السياحي",
    contact: "01234567980",
    description: "فندق فاخر يحتوي على مطعم يقدم مأكولات بحرية طازجة وخدمات ممتازة.",
    coords: [31.275, 32.295],
    image: "/imgs/hotel7.jpg",
    category: "فندق",
  },
];

export default hotels;