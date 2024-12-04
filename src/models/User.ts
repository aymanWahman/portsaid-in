import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  image?: string;
  role: 'user' | 'admin';
  createdAt: Date;
}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'الاسم مطلوب'],
    trim: true,
    minlength: [2, 'الاسم يجب أن يكون على الأقل حرفين'],
    maxlength: [50, 'الاسم يجب أن لا يتجاوز 50 حرف']
  },
  email: {
    type: String,
    required: [true, 'البريد الإلكتروني مطلوب'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'البريد الإلكتروني غير صالح']
  },
  password: {
    type: String,
    required: [true, 'كلمة المرور مطلوبة'],
    minlength: [6, 'كلمة المرور يجب أن تكون 6 أحرف على الأقل']
  },
  image: {
    type: String,
    default: '/images/default-avatar.png'
  },
  role: {
    type: String,
    enum: {
      values: ['user', 'admin'],
      message: '{VALUE} غير مسموح به كدور للمستخدم'
    },
    default: 'user'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// التحقق من صحة البريد الإلكتروني قبل الحفظ
userSchema.pre('save', async function(next) {
  if (!this.isModified('email')) {
    return next();
  }

  try {
    const existingUser = await mongoose.models.User.findOne({ 
      email: this.email,
      _id: { $ne: this._id }
    });

    if (existingUser) {
      throw new Error('البريد الإلكتروني مستخدم بالفعل');
    }

    next();
  } catch (error) {
    next(error as Error);
  }
});

const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;
