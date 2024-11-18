// components/LetterCard.tsx

import Image from 'next/image';

interface News {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface NewsCardProps {
  news: News; // الحقل letter من النوع Letter
  readText?: () => void; // تمرير دالة readText
}

const NewsCard: React.FC<NewsCardProps> = ({ news, readText }) => {
  return (
    <article className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className='mx-auto'>
        <Image
          src={news.image}
          alt={news.title}
          width={260}
          height={130}
          className="rounded shadow-lg w-96 h-80 "
        />
      </div>
      
      <div className='col-span-2 p-6 space-y-5'>
        <h3 className='text-center font-bold text-5xl text-cyan-600'>{news.title}</h3>
        <p  className='text-center text-3xl font-semibold '>{news.description}</p>
        <button
          className="text-3xl text-center text-pink-400 font-bold py-2 px-4 rounded"
          onClick={readText} // استدعاء دالة readText عند الضغط
        >
        🔊  Read
        </button>
      </div>
    </article>
  );
};

export default NewsCard;
