import { DataTypes } from '../Types/dataTypes';

const restaurants: DataTypes[] = [
  
    {
      "id": 1,
      "name": "مطعم الحاج علي للأسماك",
      "region": "حي العرب",
      "address": "شارع الجمهورية",
      "cuisine": ["مأكولات بحرية"],
      "contact": "01234567890",
      "description": "مطعم يقدم الأسماك الطازجة مع أطباق مميزة.",
      "coordinates": [31.265, 32.3018],
      "image": "/imgs/seafood.jpg",
      "category": "مطاعم أسماك"
    },
    {
      "id": 2,
      "name": "مطعم البحر الأحمر",
      "region": "حي الشرق",
      "address": "شارع 23 يوليو",
      "cuisine": ["مأكولات بحرية", "مشويات"],
      "contact": "01098765432",
      "description": "يوفر أطباق الأسماك المميزة والمشويات الطازجة.",
      "coordinates": [31.257, 32.295],
      "image": "/imgs/seafood2.jpg",
      "category": "مطاعم أسماك"
    },
    {
      "id": 3,
      "name": "مطعم الشرقاوي",
      "region": "حي الضواحي",
      "address": "بالقرب من نادي بورسعيد",
      "cuisine": ["مشويات"],
      "contact": "01112345678",
      "description": "يشتهر بالمشويات الشرقية وأطباق المقبلات.",
      "coordinates": [31.272, 32.298],
      "image": "/imgs/seafood3.jpg",
      "category": "مطاعم مشويات"
    },
    {
      "id": 4,
      "name": "بيتزا هت بورسعيد",
      "region": "حي المناخ",
      "address": "شارع طرح البحر",
      "cuisine": ["بيتزا", "وجبات سريعة"],
      "contact": "19000",
      "description": "سلسلة عالمية متخصصة في البيتزا.",
      "coordinates": [31.268, 32.301],
      "image": "/imgs/pizzaHut.jpg",
      "category": "مطاعم بيتزا"
    },
    {
      "id": 5,
      "name": "ماكدونالدز",
      "region": "حي الشرق",
      "address": "شارع الجمهورية",
      "cuisine": ["وجبات سريعة"],
      "contact": "19991",
      "description": "وجبات سريعة وخدمة توصيل.",
      "coordinates": [31.259, 32.299],
      "image": "/imgs/macdo.jpg",
      "category": "مطاعم وجبات سريعة"
    },
    {
      "id": 6,
      "name": "كافيه كورنيش",
      "region": "بورفؤاد",
      "address": "شارع الكورنيش",
      "cuisine": ["مشروبات", "مأكولات خفيفة"],
      "contact": "01065432109",
      "description": "كافيه يتميز بإطلالة مباشرة على البحر.",
      "coordinates": [31.254, 32.319],
      "image": "/imgs/seafood5.jpg",
      "category": "كافيه"
    },
    {
      "id": 7,
      "name": "مطعم السلطان",
      "region": "حي المناخ",
      "address": "شارع النهضة",
      "cuisine": ["مشويات", "شرقي"],
      "contact": "01234567890",
      "description": "مكان عائلي يقدم أشهى الأطباق الشرقية.",
      "coordinates": [31.269, 32.307],
      "image": "/imgs/seafoodsoup.jpg",
      "category": "مطاعم مشويات"
    },
    {
      "id": 8,
      "name": "كافيه الجزيرة",
      "region": "حي الشرق",
      "address": "شارع الكورنيش",
      "cuisine": ["مشروبات", "مخبوزات"],
      "contact": "01198765432",
      "description": "مكان هادئ يقدم القهوة والحلويات.",
      "coordinates": [31.259, 32.300],
      "image": "/imgs/cafe2.jpg",
      "category": "كافيه"
    },  {
      "id": 9,
      "name": "مطعم لؤلؤة البحر",
      "region": "حي المناخ",
      "address": "شارع محمد علي",
      "cuisine": ["مأكولات بحرية", "مشويات"],
      "contact": "01234567891",
      "description": "مطعم يقدم أطباق بحرية مميزة وأجواء رائعة.",
      "coordinates": [31.270, 32.306],
      "image": "/imgs/seafoodsoup2.jpg",
      "category": "مطاعم أسماك"
    },
    {
      "id": 10,
      "name": "كافيه سويت كورنر",
      "region": "حي العرب",
      "address": "شارع سعد زغلول",
      "cuisine": ["مشروبات", "حلويات"],
      "contact": "01112345679",
      "description": "مكان يقدم القهوة والحلويات الطازجة.",
      "coordinates": [31.262, 32.302],
      "image": "/imgs/cafe3.jpg",
      "category": "كافيه"
    },
    {
      "id": 11,
      "name": "مطعم الف ليلة وليلة",
      "region": "حي الشرق",
      "address": "شارع الكورنيش",
      "cuisine": ["شرقي", "وجبات عائلية"],
      "contact": "01087654321",
      "description": "مطعم عائلي يتميز بأطباق شرقية تقليدية.",
      "coordinates": [31.259, 32.299],
      "image": "/imgs/grills3.jpg",
      "category": "مطاعم شرقي"
    },
    {
      "id": 12,
      "name": "بيتزا كينج",
      "region": "حي الزهور",
      "address": "شارع البطل",
      "cuisine": ["بيتزا", "وجبات سريعة"],
      "contact": "19002",
      "description": "بيتزا شهية وخدمة توصيل مميزة.",
      "coordinates": [31.273, 32.304],
      "image": "/imgs/pizza2.jpg",
      "category": "مطاعم بيتزا"
    },
    {
      "id": 13,
      "name": "كافيه النخيل",
      "region": "بورفؤاد",
      "address": "شارع البحر",
      "cuisine": ["مشروبات", "وجبات خفيفة"],
      "contact": "01198765431",
      "description": "إطلالة رائعة مع مشروبات متنوعة.",
      "coordinates": [31.253, 32.318],
      "image": "/imgs/cafe.jpg",
      "category": "كافيه"
    },{
      "id": 14,
      "name": "مطعم كريستال",
      "region": "حي العرب",
      "address": "شارع الجمهورية بجوار الميناء",
      "cuisine": ["أطباق عالمية", "وجبات خفيفة"],
      "contact": "01234567811",
      "description": "مطعم فخم يقدم أطباق عالمية وخدمات مميزة.",
      "coordinates": [31.262, 32.305],
      "image": "/imgs/crystal.jpg",
      "category": "مطاعم عالمية"
    },
    {
      "id": 15,
      "name": "كافيه موج البحر",
      "region": "حي الشرق",
      "address": "كورنيش البحر",
      "cuisine": ["مشروبات", "وجبات خفيفة"],
      "contact": "01056789011",
      "description": "كافيه يتميز بموقعه الفريد على البحر.",
      "coordinates": [31.258, 32.298],
      "image": "/imgs/cafe2.jpg",
      "category": "كافيه"
    },
    {
      "id": 16,
      "name": "مطعم الزعيم",
      "region": "حي المناخ",
      "address": "شارع الثلاثيني",
      "cuisine": ["مشويات", "أطباق شرقية"],
      "contact": "01122334455",
      "description": "يقدم أشهى المشويات الشرقية في أجواء عائلية.",
      "coordinates": [31.265, 32.303],
      "image": "/imgs/leader.jpg",
      "category": "مطاعم شرقي"
    },
    {
      "id": 17,
      "name": "مطعم وكافيه أوركيد",
      "region": "بورفؤاد",
      "address": "شارع بورفؤاد الرئيسي",
      "cuisine": ["مشروبات", "أطباق خفيفة"],
      "contact": "01098765433",
      "description": "مكان مثالي للاستمتاع بمشروباتك المفضلة.",
      "coordinates": [31.252, 32.317],
      "image": "/imgs/orchid.jpg",
      "category": "كافيه"
    },
    {
      "id": 18,
      "name": "مطعم البيت الشامي",
      "region": "حي الزهور",
      "address": "شارع الزهور",
      "cuisine": ["أطباق شامية", "مشويات"],
      "contact": "01234567822",
      "description": "يقدم أطباق شامية تقليدية ومميزة.",
      "coordinates": [31.270, 32.308],
      "image": "/imgs/shami.jpg",
      "category": "مطاعم شامية"
    },
    {
      "id": 19,
      "name": "كافيه ستارز",
      "region": "حي العرب",
      "address": "ميدان المنشية",
      "cuisine": ["مشروبات", "حلويات"],
      "contact": "01022334455",
      "description": "مكان يقدم القهوة والحلويات في جو مريح.",
      "coordinates": [31.262, 32.302],
      "image": "/imgs/starscafe.jpg",
      "category": "كافيه"
    },
    {
      "id": 20,
      "name": "مطعم أبو عمر",
      "region": "حي الشرق",
      "address": "شارع النصر",
      "cuisine": ["مشويات", "أطباق شرقية"],
      "contact": "01198765432",
      "description": "يقدم ألذ المشويات مع المقبلات الطازجة.",
      "coordinates": [31.258, 32.297],
      "image": "/imgs/abuomar.jpg",
      "category": "مطاعم مشويات"
    },
    {
      "id": 21,
      "name": "بيتزا نايت",
      "region": "حي المناخ",
      "address": "شارع 23 يوليو",
      "cuisine": ["بيتزا", "وجبات خفيفة"],
      "contact": "01223334455",
      "description": "بيتزا طازجة وأجواء شبابية ممتعة.",
      "coordinates": [31.267, 32.306],
      "image": "/imgs/pizzanight.jpg",
      "category": "مطاعم بيتزا"
    }
  
];

export default restaurants;
