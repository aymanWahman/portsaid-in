import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectDB from '@/lib/db';
import User from '@/models/User';

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: 'يرجى تقديم جميع المعلومات المطلوبة' },
        { status: 400 }
      );
    }

    await connectDB();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: 'البريد الإلكتروني مستخدم بالفعل' },
        { status: 400 }
      );
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = await User.create({
        email,
        name,
        password: hashedPassword,
      });
      return NextResponse.json({ message: "تم إنشاء الحساب بنجاح", user }, { status: 201 });
    } catch (err: unknown) {
      console.error('خطأ في إنشاء الحساب:', err);
      return NextResponse.json(
        { message: 'حدث خطأ أثناء إنشاء الحساب' },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('خطأ في إنشاء الحساب:', error);
    return NextResponse.json(
      { message: 'حدث خطأ أثناء إنشاء الحساب' },
      { status: 500 }
    );
  }
}
