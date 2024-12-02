'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>جاري التحميل...</div>;
  }

  if (!session) {
    redirect('/auth/signin');
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">الملف الشخصي</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">الاسم</label>
            <p className="mt-1 text-lg">{session.user?.name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">البريد الإلكتروني</label>
            <p className="mt-1 text-lg">{session.user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
