'use client';

import { useState, useRef } from 'react';
import { useSession } from 'next-auth/react';
import { FiEye, FiEyeOff, FiUpload, FiX } from 'react-icons/fi';
import Image from 'next/image';

export default function ProfilePage() {
  const { data: session, update: updateSession } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB
        setError('حجم الصورة يجب أن يكون أقل من 5 ميجابايت');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setError('');
      setSuccess(false);

      const formData = new FormData(e.currentTarget);
      const data: {
        name: string | null;
        email: string | null;
        currentPassword: string | null;
        newPassword: string | null;
        image?: string;
      } = {
        name: formData.get('name') as string | null,
        email: formData.get('email') as string | null,
        currentPassword: formData.get('currentPassword') as string | null,
        newPassword: formData.get('newPassword') as string | null,
      };

      // إضافة الصورة إذا تم اختيارها
      if (imagePreview) {
        data.image = imagePreview;
      }

      const res = await fetch('/api/user/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'حدث خطأ في تحديث البيانات');
      }

      await res.json();
      setSuccess(true);
      
      // تحديث بيانات الجلسة
      await updateSession({
        ...session,
        user: {
          ...session?.user,
          name: data.name,
          email: data.email,
          image: data.image || session?.user?.image,
        },
      });

    } catch (error) {
      setError(error instanceof Error ? error.message : 'حدث خطأ في تحديث البيانات');
    } finally {
      setIsLoading(false);
    }
  };

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600 dark:text-gray-400">يرجى تسجيل الدخول لعرض الملف الشخصي</p>
      </div>
    );
  }

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
            الملف الشخصي
          </h2>

          {error && (
            <div className="mb-6 bg-red-50 dark:bg-red-900/50 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-200 px-4 py-3 rounded-lg text-right">
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          {success && (
            <div className="mb-6 bg-green-50 dark:bg-green-900/50 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-200 px-4 py-3 rounded-lg text-right">
              <span className="block sm:inline">تم تحديث البيانات بنجاح!</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* قسم الصورة الشخصية */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative w-32 h-32">
                {(imagePreview || session?.user?.image) ? (
                  <>
                    <Image
                      src={imagePreview || session?.user?.image || '/default-avatar.png'}
                      alt="الصورة الشخصية"
                      fill
                      className="rounded-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                    >
                      <FiX size={16} />
                    </button>
                  </>
                ) : (
                  <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <FiUpload size={32} className="text-gray-400" />
                  </div>
                )}
              </div>
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  ref={fileInputRef}
                  className="hidden"
                  id="profile-image"
                />
                <label
                  htmlFor="profile-image"
                  className="cursor-pointer bg-seaBlue hover:bg-seaBlue-dark text-white px-4 py-2 rounded-lg transition-colors duration-200 inline-block"
                >
                  اختر صورة
                </label>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                يجب أن يكون حجم الصورة أقل من 5 ميجابايت
              </p>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-right mb-2">
                الاسم
              </label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={session.user?.name || ''}
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
                defaultValue={session.user?.email || ''}
                required
                className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-right placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-seaBlue focus:border-seaBlue transition-colors duration-200"
                placeholder="example@example.com"
                disabled={isLoading}
              />
            </div>

            <div className="relative">
              <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-right mb-2">
                كلمة المرور الحالية
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="currentPassword"
                  name="currentPassword"
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

            <div className="relative">
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-right mb-2">
                كلمة المرور الجديدة
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  id="newPassword"
                  name="newPassword"
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-right placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-seaBlue focus:border-seaBlue transition-colors duration-200"
                  placeholder="******"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  {showNewPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 text-right">
                اتركها فارغة إذا كنت لا تريد تغيير كلمة المرور
              </p>
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
              {isLoading ? 'جاري الحفظ...' : 'حفظ التغييرات'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
