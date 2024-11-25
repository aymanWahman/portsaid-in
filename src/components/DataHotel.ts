import { DataTypes } from '../Types/dataTypes';

const hotels: DataTypes[] = [
  {
    id: 1,
    name: "فندق جراند",
    region: "حي الشرق",
    address: "Port Said, Atef El-Sadat Street Madînet, Portsaid, Port Said Governorate 42511",
    contact: "0663267550",
    description: "فندق فاخر يوفر إقامة مميزة مع إطلالة على البحر وخدمات عالية الجودة.",
    coordinates: [31.27435370053887, 32.29923624015078],
    image: "/imgs/hGrand.jpg",
    category: "فندق",
  },
  {
    id: 2,
    name: "فندق جراند الباتروس",
    region: "حي الشرق",
    address: " شارع طرح البحر، Port Said Governorate 8575001",
    contact: "0663332211",
    description: "فندق يقدم خدمات راقية بأسعار تناسب الجميع، مناسب للعائلات ورجال الأعمال.",
    coordinates: [31.27244635401023, 32.303699435983226],
    image: "/imgs/hGrandElbatros.jpg",
    category: "فندق",
  },
  {
    id: 3,
    name: "فندق ريستا",
    region: "حي الشرق",
    address: "Shokri Al Kowatli, El Sharq, Port Said Governorate 8574214",
    contact: "0663200511",
    description: "فندق يقدم خدمات إقامة بسيطة ومناسبة للعائلات مع موقع قريب من الحدائق والمرافق العامة.",
    coordinates: [31.271419305290607, 32.31245416626994],
    image: "/imgs/hResta.jpg",
    category: "فندق",
  },
  {
    id: 4,
    name: "جنةالنورس",
    region: "حي الشرق",
    address: "شارع طرح البحر",
    contact: "01023337880",
    description: "فندق اقتصادي يوفر إقامة مريحة وخدمات أساسية مع إطلالة مباشرة على البحر.",
    coordinates: [31.27167188342945, 32.3114594225336],
    image: "/imgs/hGnetElnoras.png",
    category: "فندق",
  },
  {
    id: 5,
    name: "فندق بانوراما",
    region: "حي الشرق",
    address: " El-Gomhoreya, Port Said Governorate 8574210",
    contact: "01117979999",
    description: "فندق عصري مع خدمات فاخرة",
    coordinates: [31.269511899432864, 32.31073755248823],
    image: "/imgs/hPanorama.jpg",
    category: "فندق",
  },
  {
    id: 6,
    name: "فندق الميناء",
    region: "بورفؤاد",
    address: "كورنيش بورفؤاد، بجوار النادي البحري",
    contact: "01099887766",
    description: "فندق صغير يقدم تجربة إقامة دافئة مع إطلالة على الميناء.",
    coordinates: [31.245, 32.320],
    image: "/imgs/hotel6.jpg",
    category: "فندق",
  },
  {
    id: 7,
    name: "فندق هلنان",
    region: "بورفؤاد ",
    address: "23-Jul, st، Port Fouad City, Port Said Governorate 8587010",
    contact: "01159757590",
    description: "فندق فاخر يحتوي على مطعم يقدم مأكولات طازجة وخدمات ممتازة.",
    coordinates: [31.24306140953774, 32.32997202946598],
    image: "/imgs/helnan.jpg",
    category: "فندق",
  },
];

export default hotels;
