import { FC } from 'react';
import OrderDetails from '@/components/OrderDetails';
import DriverRating from '@/components/DriverRating';

const ShobeekLobeekPage: FC = () => {
  return (
    <div className="min-h-screen text-gray-800 dark:text-gray-200 mt-20 text-right">
      <header className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded mx-6 shadow-md">
        <h1 className="text-xl font-bold">شُبيك لُبيك</h1>
        <div className="flex items-center space-x-4">
          <button className="rounded-full bg-gray-200 dark:bg-gray-700">
            {/* أيقونة العفريت */}
            <img src="/icons/genie-icon.png" alt="Genie Icon" className="w-8 h-8" />
          </button>
        </div>
      </header>

      <main className="p-6">
        <OrderDetails />
        <DriverRating />
      </main>
    </div>
  );
};

export default ShobeekLobeekPage;