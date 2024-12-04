import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectDB from '@/lib/db';
import User from '@/models/User';

export async function POST(request: Request) {
  console.log('🟡 بدء معالجة طلب التسجيل');
  
  try {
    // التحقق من صحة JSON في الطلب
    let body;
    try {
      body = await request.json();
      console.log('🟢 تم استلام البيانات:', body);
    } catch (e) {
      console.error('🔴 خطأ في تحليل JSON:', e);
      return new NextResponse(
        JSON.stringify({ error: 'خطأ في تنسيق البيانات المرسلة' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const { name, email, password } = body;

    // التحقق من المدخلات
    if (!name || !email || !password) {
      console.error('🔴 بيانات مفقودة:', { name, email, password: !!password });
      return new NextResponse(
        JSON.stringify({ error: 'جميع الحقول مطلوبة' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // الاتصال بقاعدة البيانات
    console.log('🟡 جاري الاتصال بقاعدة البيانات');
    try {
      await connectDB();
      console.log('🟢 تم الاتصال بقاعدة البيانات');
    } catch (e) {
      console.error('🔴 خطأ في الاتصال بقاعدة البيانات:', e);
      return new NextResponse(
        JSON.stringify({ error: 'فشل الاتصال بقاعدة البيانات' }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // التحقق من صحة البريد الإلكتروني
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('🔴 بريد إلكتروني غير صالح:', email);
      return new NextResponse(
        JSON.stringify({ error: 'البريد الإلكتروني غير صالح' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // التحقق من طول كلمة المرور
    if (password.length < 6) {
      console.error('🔴 كلمة مرور قصيرة جداً');
      return new NextResponse(
        JSON.stringify({ error: 'كلمة المرور يجب أن تكون 6 أحرف على الأقل' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // التحقق من وجود المستخدم
    console.log('🟡 التحقق من وجود المستخدم');
    const existingUser = await User.findOne({ email }).lean().exec();
    if (existingUser) {
      console.error('🔴 البريد الإلكتروني مستخدم:', email);
      return new NextResponse(
        JSON.stringify({ error: 'البريد الإلكتروني مستخدم بالفعل' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // تشفير كلمة المرور وإنشاء المستخدم
    console.log('🟡 جاري إنشاء المستخدم');
    const hashedPassword = await bcrypt.hash(password, 12);
    
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    console.log('🟢 تم إنشاء المستخدم بنجاح:', user._id);

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
    console.error('🔴 خطأ غير متوقع:', error);
    
    return new NextResponse(
      JSON.stringify({
        error: error instanceof Error ? error.message : 'حدث خطأ غير متوقع'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
