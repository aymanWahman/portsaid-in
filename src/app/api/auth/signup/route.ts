import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectDB from '@/lib/db';
import User from '@/models/User';

export async function POST(request: Request) {
  try {
    // التحقق من صحة JSON في الطلب
    let body;
    try {
      body = await request.json();
    } catch (e) {
      return NextResponse.json(
        { error: 'خطأ في تنسيق البيانات المرسلة' },
        { status: 400 }
      );
    }

    const { name, email, password } = body;

    // التحقق من المدخلات
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'جميع الحقول مطلوبة' },
        { status: 400 }
      );
    }

    // الاتصال بقاعدة البيانات
    try {
      await connectDB();
    } catch (e) {
      console.error('خطأ في الاتصال بقاعدة البيانات:', e);
      return NextResponse.json(
        { error: 'فشل الاتصال بقاعدة البيانات' },
        { status: 500 }
      );
    }

    // التحقق من صحة البريد الإلكتروني
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'البريد الإلكتروني غير صالح' },
        { status: 400 }
      );
    }

    // التحقق من طول كلمة المرور
    if (password.length < 6) {
      return NextResponse.json(
        { error: 'كلمة المرور يجب أن تكون 6 أحرف على الأقل' },
        { status: 400 }
      );
    }

    // التحقق من وجود المستخدم
    const existingUser = await User.findOne({ email }).lean().exec();
    if (existingUser) {
      return NextResponse.json(
        { error: 'البريد الإلكتروني مستخدم بالفعل' },
        { status: 400 }
      );
    }

    // تشفير كلمة المرور وإنشاء المستخدم
    const hashedPassword = await bcrypt.hash(password, 12);
    
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // إرجاع استجابة نجاح
    return new NextResponse(
      JSON.stringify({
        success: true,
        message: 'تم إنشاء الحساب بنجاح',
        user: {
          id: user._id.toString(),
          name: user.name,
          email: user.email
        }
      }),
      {
        status: 201,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

  } catch (error) {
    console.error('خطأ في التسجيل:', error);
    
    return new NextResponse(
      JSON.stringify({ error: 'حدث خطأ في معالجة الطلب' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
