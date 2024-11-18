// components/NewsCard.tsx

import Image from 'next/image';

interface News {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface NewsCardProps {
  news: News; 

}

const NewsCard: React.FC<NewsCardProps> = ({news }) => {
  return (
    <article className="grid md:grid-cols-3 gap-4 items-center p-4 rounded-lg shadow-xl transition-shadow duration-300">
      <div className='mx-auto'>
        <Image
          src={news.image}
          alt={news.title}
          width={260}
          height={130}
          className="rounded shadow-xl w-full h-80 "
        />
      </div>
      
      <div className='md:col-span-2 p-6 space-y-3'>
        <h3 className='text-center font-bold text-xl md:text-3xl text-seaBlue'>{news.title}</h3>
        <p  className='text-center text-lg md:text-xl font-semibold '>{news.description}</p>
      
      </div>
    </article>
  );
};

export default NewsCard;
