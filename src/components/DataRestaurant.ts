import { DataTypes } from '../Types/dataTypes';

const restaurants: DataTypes[] = [
  
    {
      "id": 1,
      "name": "مطعم غنيم  ",
      "region": "حي العرب",
      "address": " شارع محمد على واحمد الجيار عرابى سابقا امام مجمع محاكم بور سعيد،،, Al Arab, Port Said Governorate",
      "cuisine": ["وجبات سريعة "],
      "contact": "01203360063",
      "description": "مطعم يقدم الوجبات الطازجة مع أطباق مميزة.",
      "coordinates": [31.267139621942786, 32.30296904110538],
      "image": "/imgs/rGhoneem.jpg",
      "category": "مطاعم وجبات سريعة"
    },
    {
      "id": 2,
      "name": "MOODZ ",
      "region": "حي الشرق",
      "address": "Tarh Albahr, 34 Abd El-Salam Aref, Port Said Governorate",
      "cuisine": ["وجبات خفيفة"],
      "contact": "01277766690",
      "description": "Sandwich Shop ",
      "coordinates": [31.26708653504781, 32.30803714413726],
      "image": "/imgs/rMoodz.jpg",
      "category": "تيك أوي "
    }
  
];

export default restaurants;
