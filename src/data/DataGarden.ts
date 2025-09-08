import { DataTypes } from "../types/dataTypes";

const gardens: DataTypes[] = [
  {
    id: 1,
    name: "حديقة فريال",
    nameEn: "Ferial Garden",
    region: "حي الشرق",
    regionEn: "El Sharq",
    address: "بجوار شارع الجمهورية",
    addressEn: "Next to El-Gomhoreya Street",
    description: "واحدة من أقدم الحدائق في بورسعيد، تحتوي على مناطق خضراء واسعة وأماكن ترفيهية",
    descriptionEn: "One of the oldest gardens in Port Said, with spacious green areas and recreational spots",
    coordinates: [31.259, 32.305],
    image: "https://res.cloudinary.com/dktod7mod/image/upload/v1757353739/product_images/portsaidIn/garden_hibs3a.jpg",
    category: "حديقة",
    categoryEn: "Garden",
    supCategory: "",
    supCategoryEn: "",
    contact: "",
  },
  {
    id: 2,
    name: "حديقة المنتزه",
    nameEn: "El Montazah Garden",
    region: "حي الزهور",
    regionEn: "Al Zehour",
    address: "شارع 23 يوليو، بالقرب من محطة الحافلات",
    addressEn: "23-Jul Street, near the bus station",
    description: "حديقة عائلية تضم أماكن مخصصة للأطفال ومنطقة للجلوس",
    descriptionEn: "A family garden with designated areas for children and a seating area",
    coordinates: [31.27, 32.302],
    image: "https://res.cloudinary.com/dktod7mod/image/upload/v1757353811/product_images/portsaidIn/garden2_fteq9q.jpg",
    category: "حديقة",
    categoryEn: "Garden",
    supCategory: "",
    supCategoryEn: "",
    contact: "",
  },
];

export default gardens;