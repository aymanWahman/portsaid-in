import { DataTypes } from '../Types/dataTypes';

const Pharmacies: DataTypes[] = [
  {
    id: 1,
    name: "صيدلية العزبي ",
    region: "حي الشرق",
    address: "2 شارع صفية زغلول, El-Gomhoreya, Port Said Governorate",
    contact: "0663262679",
    description: "فندق فاخر يوفر إقامة مميزة مع إطلالة على البحر وخدمات عالية الجودة.",
    coordinates: [31.263074556281897, 32.31093391905044],
    image: "/imgs/phElezaby.jpg",
    category: "خدمة ليلية",
  },
  {
    id: 2,
    name: "صيدلية ال عبد اللطيف الطرشوبي",
    region: "حي الشرق",
    address: "شارع 23 يوليو ",
    contact: "01271194005",
    description: "فندق يقدم خدمات راقية بأسعار تناسب الجميع، مناسب للعائلات ورجال الأعمال.",
    coordinates: [31.270343362049534, 32.30193532281562],
    image: "/imgs/phSeif.jpg",
    category: "خدمة ليلية",
  },{
    id: 3,
    name: "صيدليات سيف",
    region: "حي الشرق",
    address: "شارع محمد علي تقاطع شارع النصر، برج الأندلس ",
    contact: "0663206677",
    description: "خدمة توصيل الطلبات",
    coordinates: [31.265385604560784, 32.31462463868111],
    image: "/imgs/phSeif.jpg",
    category: "خدمة ليلية",
  },{
    id: 4,
    name: "صيدلية ممفيس",
    region: "حي الشرق",
    address: "Memphis street, El Sharq, Port Said Governorate 8573115",
    contact: "01014555637",
    description: "خدمة توصيل الطلبات",
    coordinates: [31.261863984401856, 32.31217846413986],
    image: "/imgs/phSeif.jpg",
    category: "لا يوجد خدمة ليلية",
  },
  
];

export default Pharmacies;
