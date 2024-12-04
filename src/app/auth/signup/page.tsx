'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { theme } = useTheme();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setError('');

      const formData = new FormData(e.currentTarget);
      const requestData = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
      };

      console.log('🟡 إرسال بيانات التسجيل:', requestData);

      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
        cache: 'no-store',
      });

      console.log('🟡 حالة الاستجابة:', response.status);
      
      // قراءة النص الخام من الاستجابة
      const responseText = await response.text();
      console.log('🟡 نص الاستجابة:', responseText);

      // محاولة تحليل JSON
      let data;
      if (responseText) {
        try {
          data = JSON.parse(responseText);
          console.log('🟢 تم تحليل البيانات بنجاح:', data);
        } catch (e) {
          console.error('🔴 خطأ في تحليل JSON:', e);
          throw new Error('فشل في قراءة الاستجابة من الخادم');
        }
      } else {
        console.error('🔴 استجابة فارغة من الخادم');
        throw new Error('لم يتم استلام رد من الخادم');
      }

      if (!response.ok) {
        console.error('🔴 خطأ في الاستجابة:', data);
        throw new Error(data?.error || 'حدث خطأ أثناء إنشاء الحساب');
      }

      console.log('🟢 تم التسجيل بنجاح، جاري التحويل...');
      router.push('/auth/signin');
    } catch (error) {
      console.error('🔴 خطأ:', error);
      setError(error instanceof Error ? error.message : 'حدث خطأ غير متوقع');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200 dark:from-gray-800 dark:to-gray-900 p-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          إنشاء حساب جديد
        </h2>

        {error && (
          <div className="bg-red-100 dark:bg-red-900 border border-red-400 text-red-700 dark:text-red-200 px-4 py-3 rounded relative text-right" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-right">
              الاسم
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-right placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white"
              placeholder="أدخل اسمك"
              minLength={2}
              maxLength={50}
              disabled={isLoading}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-right">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-right placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white"
              placeholder="example@example.com"
              disabled={isLoading}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-right">
              كلمة المرور
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-right placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white"
              placeholder="******"
              minLength={6}
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              isLoading
                ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            }`}
          >
            {isLoading ? 'جاري التسجيل...' : 'تسجيل'}
          </button>
        </form>
      </div>
    </div>
  );
}
