'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const { theme } = useTheme();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setError('');
      setSuccess(false);

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
      
      const responseText = await response.text();
      console.log('🟡 نص الاستجابة:', responseText);

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

      setSuccess(true);
      console.log('🟢 تم التسجيل بنجاح، جاري التحويل إلى الصفحة الرئيسية...');
      setTimeout(() => {
        router.push('/');
      }, 1500);
    } catch (error) {
      console.error('🔴 خطأ:', error);
      setError(error instanceof Error ? error.message : 'حدث خطأ غير متوقع');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200 dark:from-gray-800 dark:to-gray-900 p-6 relative overflow-hidden">
      {/* دوائر زخرفية */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-pink-300/30 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-pink-400/20 rounded-full translate-x-1/2 -translate-y-1/2 blur-xl"></div>
      <div className="absolute bottom-0 left-1/4 w-56 h-56 bg-pink-200/40 rounded-full blur-2xl"></div>
      
      {/* نصف دائرة في الزاوية اليمنى */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-300/30 rounded-full"></div>
      
      {/* نصف دائرة في الزاوية اليسرى */}
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-400/20 rounded-full"></div>

      <div className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-lg rounded-lg shadow-xl p-8 max-w-md w-full space-y-6 relative z-10">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          إنشاء حساب جديد
        </h2>

        {error && (
          <div className="bg-red-100 dark:bg-red-900 border border-red-400 text-red-700 dark:text-red-200 px-4 py-3 rounded relative text-right" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {success && (
          <div className="bg-green-100 dark:bg-green-900 border border-green-400 text-green-700 dark:text-green-200 px-4 py-3 rounded relative text-right" role="alert">
            <span className="block sm:inline">تم إنشاء حسابك بنجاح! جاري تحويلك...</span>
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
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-right placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 text-gray-900 dark:text-white"
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
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-right placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 text-gray-900 dark:text-white"
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
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-right placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 text-gray-900 dark:text-white"
              placeholder="******"
              minLength={6}
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
              ${isLoading 
                ? 'bg-pink-400 cursor-not-allowed' 
                : 'bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500'
              } transition-colors duration-200`}
          >
            {isLoading ? 'جاري التسجيل...' : 'تسجيل'}
          </button>
        </form>
      </div>
    </div>
  );
}
