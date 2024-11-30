import { DataTypes } from '../Types/dataTypes';

const clothing: DataTypes[] = [
  {
    id: 1,
    name: " غراب",
    region: "حي الشرق",
    address: "شارع الجمهورية",
    contact: "01000000",
    description: "ملابس جديدة بأعلي جودة والذوق الراقي",
    coordinates: [31.27435370053887, 32.29923624015078],
    image: "/imgs/clothing.jpg",
    category: "جديد",
  },
  {
    id: 2,
    name: "بابا المجال",
    region: "حي الشرق",
    address: "سوق البازار الجديد",
    contact: "066222222",
    description: "جميع الملابس المستعملة رجالي وحريمي وأطفال",
    coordinates: [31.272, 32.30],
    image: "/imgs/clothing.jpg",
    category: "مستعمل",
  },  {
    id: 3,
    name: " خضير",
    region: "حي الشرق",
    address: "شارع طرح البحر",
    contact: "01000000",
    description: "ملابس جديدة وبدل بأعلي جودة والذوق الراقي",
    coordinates: [31.2743, 32.29],
    image: "/imgs/clothing.jpg",
    category: "جديد",
  },
  {
    id: 4,
    name: " شحاتة",
    region: "حي المناخ",
    address: "  أبراج خان الخليلي",
    contact: "066222222",
    description: "جميع الملابس المستعملة رجالي وحريمي وأطفال",
    coordinates: [31.272, 32.30],
    image: "/imgs/clothing.jpg",
    category: "مستعمل",
  },
  
];

export default clothing;
