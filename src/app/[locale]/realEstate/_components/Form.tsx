"use client";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function Form() {
  return (
    <div>
      
      {/* Contact Form */}
      <section className="container">
        <h2 className="text-2xl font-semibold mb-6">تواصل معنا</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input placeholder="الاسم" className="rounded-xl" />
          <Input placeholder="رقم الهاتف" className="rounded-xl" />
          <Input placeholder="نوع العقار المطلوب" className="rounded-xl" />
          <Input placeholder="الميزانية المتوقعة" className="rounded-xl" />
          <Textarea
            placeholder="ملاحظات إضافية"
            className="md:col-span-2 rounded-xl"
          />
          <Button className="md:col-span-2 rounded-2xl">أرسل طلبك</Button>
        </form>
      </section>
    </div>
  )
}

export default Form
