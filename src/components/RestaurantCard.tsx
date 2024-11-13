// components/LetterCard.tsx

import Image from 'next/image';

interface Rest {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  rating: number;
  location: string;
}

interface RestaurantCardProps {
  restaurant: Rest; // الحقل letter من النوع Letter
  readText?: () => void; // تمرير دالة readText
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant, readText }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 bg- items-center p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className='mx-auto'>
        <Image
          src={restaurant.imageUrl}
          alt={restaurant.name}
          width={260}
          height={130}
          className="rounded shadow-lg w-96 h-80 "
        />
      </div>
      
      <div className='col-span-2 p-6 space-y-5'>
        <h3 className='text-center font-bold text-5xl text-cyan-600'>{restaurant.name}</h3>
        <p  className='text-center text-3xl font-semibold '>{restaurant.description}</p>
        <p className='text-center text-3xl font-semibold text-cyan-600'>{restaurant.rating}</p>
        <p dir='rtl' className='text-center text-3xl font-semibold text-cyan-600'>{restaurant.location}</p>
        <button
          className="text-3xl text-center text-pink-400 font-bold py-2 px-4 rounded"
          onClick={readText} // استدعاء دالة readText عند الضغط
        >
        🔊  Read
        </button>
      </div>
    </section>
  );
};

export default RestaurantCard;
