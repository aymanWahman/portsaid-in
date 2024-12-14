'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setError('');
      setSuccess(false);

      const formData = new FormData(e.currentTarget);
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const password = formData.get('password') as string;

      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'حدث خطأ أثناء التسجيل');
      }

      // تم التسجيل بنجاح
      setSuccess(true);
      
      // انتظر لحظة قبل التوجيه
      setTimeout(() => {
        router.replace('/');
        router.refresh();
      }, 1500);

    } catch (error) {
      setError(error instanceof Error ? error.message : 'حدث خطأ في التسجيل');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* خلفية متدرجة */}
      <div className="absolute inset-0 bg-gradient-to-br from-seaBlue-light to-sandyGold-light dark:from-gray-900 dark:to-gray-800"></div>
      
      {/* العناصر الزخرفية */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-seaBlue-light/20 rounded-full -translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-sandyGold-light/20 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-seaBlue-light/30 rounded-full translate-y-1/2 blur-3xl"></div>
      
      {/* نصف دوائر */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sandyGold-light/20 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-seaBlue-light/30 rounded-full -translate-x-1/2 translate-y-1/2"></div>

      {/* النموذج */}
      <div className="relative z-10 w-full max-w-md p-8 mx-4">
        <div className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            إنشاء حساب جديد
          </h2>

          {error && (
            <div className="mb-6 bg-red-50 dark:bg-red-900/50 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-200 px-4 py-3 rounded-lg text-right">
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          {success && (
            <div className="mb-6 bg-green-50 dark:bg-green-900/50 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-200 px-4 py-3 rounded-lg text-right">
              <span className="block sm:inline">تم التسجيل بنجاح! جاري تحويلك...</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-right mb-2">
                الاسم
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-right placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-seaBlue focus:border-seaBlue transition-colors duration-200"
                placeholder="الاسم الكامل"
                disabled={isLoading}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-right mb-2">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-right placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-seaBlue focus:border-seaBlue transition-colors duration-200"
                placeholder="example@example.com"
                disabled={isLoading}
              />
            </div>

            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-right mb-2">
                كلمة المرور
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  required
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-right placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-seaBlue focus:border-seaBlue transition-colors duration-200"
                  placeholder="******"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors duration-200 ${
                isLoading
                  ? 'bg-seaBlue-light cursor-not-allowed'
                  : 'bg-seaBlue hover:bg-seaBlue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-seaBlue'
              }`}
            >
              {isLoading ? 'جاري التسجيل...' : 'تسجيل'}
            </button>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                لديك حساب بالفعل؟{' '}
                <Link 
                  href="/auth/signin" 
                  className="text-seaBlue hover:text-seaBlue-dark dark:text-seaBlue-light dark:hover:text-seaBlue font-medium transition-colors duration-200"
                >
                  سجل دخولك
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
