import { DataTypes } from "@/types/dataTypes";

const beaches: DataTypes[] = [
  {
    id: 1,
    name: "شاطئ بورسعيد",
    region: "حي الشرق",
    address: "كورنيش بورسعيد",
    description: "شاطئ نظيف يتميز بإطلالة رائعة على البحر المتوسط ومرافق جيدة.",
    coordinates: [31.26, 32.31],
    image: "/imgs/portsaid4.jpg",
    category: "شاطئ",
    contact: "",
  },
  {
    id: 2,
    name: "شاطئ بورفؤاد",
    region: "بورفؤاد",
    address: "كورنيش بورفؤاد",
    description: "شاطئ مثالي للعائلات مع مناطق مخصصة للسباحة ومرافق ترفيهية.",
    coordinates: [31.25, 32.32],
    image: "/imgs/portfouad4.jpg",
    category: "شاطئ",
    contact: "",
  },
];
export default beaches;
