import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectDB from '@/lib/db';
import User from '@/models/User';

export async function POST(request: Request) {
  try {
    await connectDB();

    const { name, email, password } = await request.json();

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: 'جميع الحقول مطلوبة' },
        { status: 400 }
      );
    }

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
      if (err instanceof Error) {
        return NextResponse.json(
          { message: err.message || 'حدث خطأ أثناء إنشاء الحساب' },
          { status: 500 }
        );
      }
      return NextResponse.json(
        { message: 'حدث خطأ غير متوقع' },
        { status: 500 }
      );
    }
  } catch (err: unknown) {
    console.error('خطأ في معالجة الطلب:', err);
    return NextResponse.json(
      { message: 'حدث خطأ في معالجة الطلب' },
      { status: 500 }
    );
  }
}
