import { DataTypes } from '../Types/dataTypes';

const beaches: DataTypes[] = [
  {
    id: 1,
    name: "شاطئ بورسعيد",
    region: "حي الشرق",
    address: "كورنيش بورسعيد",
    description: "شاطئ نظيف يتميز بإطلالة رائعة على البحر المتوسط ومرافق جيدة.",
    coords: [31.260, 32.310],
    image: "/imgs/portsaid2.jpg",
    category: "شاطئ",
    contact: ""
  },
  {
    id: 2,
    name: "شاطئ بورفؤاد",
    region: "بورفؤاد",
    address: "كورنيش بورفؤاد",
    description: "شاطئ مثالي للعائلات مع مناطق مخصصة للسباحة ومرافق ترفيهية.",
    coords: [31.250, 32.320],
    image: "/imgs/portsaid1.jpg",
    category: "شاطئ",
    contact: ""
  },
];
export default beaches;
