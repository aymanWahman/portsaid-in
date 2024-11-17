import { DataTypes } from '../dataTypes';

const restaurants: DataTypes[] = [
  {
    id: 1,
    name: "مطعم الأسماك",
    region: "حي العرب",
    address: "شارع الجمهورية بجوار الميناء",
    cuisine: ["مأكولات بحرية", "مشويات"],
    contact: "01012345678",
    description: "مطعم يقدم مأكولات بحرية طازجة وأطباق مميزة مع إطلالة رائعة على البحر.",
    coords: [31.265, 32.3018],
    image: "/imgs/seafood.jpg",
    category: "مطعم",
  },
  {
    id: 2,
    name: "مطعم علي بابا",
    region: "حي الشرق",
    address: "شارع النهضة، بجوار محطة القطار",
    cuisine: ["شرقي", "مشويات"],
    contact: "01234567890",
    description: "مطعم شرقي يقدم أشهى أطباق المشويات والمقبلات.",
    coords: [31.257, 32.295],
    image: "/imgs/seafoodsoup.jpg",
    category: "مطعم",
  },
  {
    id: 3,
    name: "مطعم لاباس",
    region: "حي المناخ",
    address: "شارع 23 يوليو، بالقرب من سوق السمك",
    cuisine: ["وجبات سريعة", "إيطالي"],
    contact: "01112345678",
    description: "مطعم يقدم البيتزا والباستا الطازجة مع خيارات وجبات سريعة.",
    coords: [31.269, 32.307],
    image: "/imgs/seafood5.jpg",
    category: "مطعم",
  },
  {
    id: 4,
    name: "مطعم الشرقاوي",
    region: "حي الضواحي",
    address: "شارع أحمد شوقي، بالقرب من نادي بورسعيد",
    cuisine: ["مشويات", "حلويات شرقية"],
    contact: "01298765432",
    description: "مطعم يقدم مشويات لذيذة وحلويات شرقية تقليدية.",
    coords: [31.272, 32.298],
    image: "/imgs/seafood2.jpg",
    category: "مطعم",
  },
  {
    id: 5,
    name: "كافيه ومطعم البحر",
    region: "بورفؤاد",
    address: "شارع الكورنيش، أمام الممشى السياحي",
    cuisine: ["مأكولات بحرية", "مشروبات"],
    contact: "01098765432",
    description: "مكان مميز لتناول وجبة بحرية أو الاستمتاع بالقهوة مع إطلالة ساحرة على البحر.",
    coords: [31.254, 32.319],
    image: "/imgs/seafood3.jpg",
    category: "كافيه",
  },
  {
    id: 6,
    name: "مطعم أبو العز",
    region: "حي الزهور",
    address: "شارع الزهور، بجوار المسجد الكبير",
    cuisine: ["أطباق شرقية", "وجبات عائلية"],
    contact: "01198765432",
    description: "مطعم شعبي يقدم وجبات شرقية وأجواء عائلية.",
    coords: [31.274, 32.303],
    image: "/imgs/seafood3.jpg",
    category: "مطعم",
  },
];

export default restaurants;
