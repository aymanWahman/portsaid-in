import { DataTypes } from '@/dataTypes';

const gardens: DataTypes[] = [
  {
    id: 1,
    name: "حديقة فريال",
    region: "حي الشرق",
    address: "شارع طرح البحر، بجوار قصر الثقافة",
    description: "واحدة من أقدم الحدائق في بورسعيد، تحتوي على مناطق خضراء واسعة وأماكن ترفيهية.",
    coords: [31.259, 32.305],
    image: "/imgs/garden.jpg",
    category: "حديقة",
    contact: ""
  },
  {
    id: 2,
    name: "حديقة المنتزه",
    region: "حي الزهور",
    address: "شارع 23 يوليو، بالقرب من محطة الحافلات",
    description: "حديقة عائلية تضم أماكن مخصصة للأطفال ومنطقة للجلوس.",
    coords: [31.270, 32.302],
    image: "/imgs/garden2.jpg",
    category: "حديقة",
    contact: ""
  },
];
export default gardens;