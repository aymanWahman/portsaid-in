import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../lib/auth';
import connect from '../../../../lib/db';
import User from '../../../../models/User';
import bcrypt from 'bcryptjs';

export async function PUT(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json(
        { message: 'يجب تسجيل الدخول أولاً' },
        { status: 401 }
      );
    }

    const { name, email, currentPassword, newPassword, image } = await req.json();

    await connect();
    
    const user = await User.findOne({ email: session.user?.email });
    
    if (!user) {
      return NextResponse.json(
        { message: 'لم يتم العثور على المستخدم' },
        { status: 404 }
      );
    }

    // التحقق من كلمة المرور الحالية إذا كان المستخدم يريد تغيير كلمة المرور
    if (newPassword) {
      if (!currentPassword) {
        return NextResponse.json(
          { message: 'يجب إدخال كلمة المرور الحالية' },
          { status: 400 }
        );
      }

      const isValidPassword = await bcrypt.compare(currentPassword, user.password);
      if (!isValidPassword) {
        return NextResponse.json(
          { message: 'كلمة المرور الحالية غير صحيحة' },
          { status: 400 }
        );
      }
    }

    // تحديث البيانات
    user.name = name;
    
    // تحديث الصورة إذا تم توفيرها
    if (image) {
      // يمكنك هنا إضافة المزيد من التحقق من الصورة إذا لزم الأمر
      user.image = image;
    }
    
    // تحديث كلمة المرور إذا تم توفيرها
    if (newPassword) {
      const hashedPassword = await bcrypt.hash(newPassword, 12);
      user.password = hashedPassword;
    }

    // التحقق من تغيير البريد الإلكتروني
    if (email !== user.email) {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return NextResponse.json(
          { message: 'البريد الإلكتروني مستخدم بالفعل' },
          { status: 400 }
        );
      }
      user.email = email;
    }

    await user.save();

    // إرجاع البيانات المحدثة
    return NextResponse.json({
      message: 'تم تحديث البيانات بنجاح',
      user: {
        name: user.name,
        email: user.email,
        image: user.image
      }
    }, { status: 200 });
    
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json(
      { message: 'حدث خطأ في تحديث البيانات' },
      { status: 500 }
    );
  }
}
