// 'use client';

export default function Contact() {
  return (
    <div dir="rtl" className="mt-20">
      <section className="py-12 px-4 text-center">
        <h2 className="text-2xl font-bold">اتصل بنا</h2>
        <p className="mt-4 text-gray-600">إذا كان لديك أي استفسار، لا تتردد في التواصل معنا عبر البريد الإلكتروني أو الهاتف.</p>
        {/* نموذج الاتصال */}
        <form className="mt-8 max-w-md mx-auto">
          <input type="text" placeholder="الاسم" className="w-full p-2 mb-4 border rounded-lg" />
          <input type="email" placeholder="البريد الإلكتروني" className="w-full p-2 mb-4 border rounded-lg" />
          <textarea placeholder="رسالتك" className="w-full p-2 mb-4 border rounded-lg"></textarea>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">إرسال</button>
        </form>
      </section>
    </div>
  );
}
