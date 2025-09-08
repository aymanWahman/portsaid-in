import { DataTypes } from "@/types/dataTypes";

const beaches: DataTypes[] = [
  {
    id: 1,
    name: "شاطئ بورسعيد",
    nameEn: "Port Said Beach",
    region: "حي الشرق",
    regionEn: "El Sharq",
    address: "كورنيش بورسعيد",
    addressEn: "Port Said Corniche",
    description: "شاطئ نظيف يتميز بإطلالة رائعة على البحر المتوسط ومرافق جيدة.",
    descriptionEn: "A clean beach with a great view of the Mediterranean Sea and good facilities.",
    coordinates: [31.26, 32.31],
    image: "https://res.cloudinary.com/dktod7mod/image/upload/v1757363087/product_images/portsaidIn/portsaid4_ljxqny.jpg",
    category: "شاطئ",
    categoryEn: "Beach",
    supCategory: "",
    supCategoryEn: "",
    contact: "",
  },
  {
    id: 2,
    name: "شاطئ بورفؤاد",
    nameEn: "Port Fouad Beach",
    region: "بورفؤاد",
    regionEn: "Port Fouad",
    address: "كورنيش بورفؤاد",
    addressEn: "Port Fouad Corniche",
    description: "شاطئ مثالي للعائلات مع مناطق مخصصة للسباحة ومرافق ترفيهية.",
    descriptionEn: "An ideal family beach with designated swimming areas and recreational facilities.",
    coordinates: [31.25, 32.32],
    image: "https://res.cloudinary.com/dktod7mod/image/upload/v1757362964/product_images/portsaidIn/portfouad4_dowljr.jpg",
    category: "شاطئ",
    categoryEn: "Beach",
    supCategory: "",
    supCategoryEn: "",
    contact: "",
  },
];

export default beaches;