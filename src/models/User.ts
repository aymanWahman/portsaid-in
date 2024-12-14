import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  image?: string;
  role: 'user' | 'admin';
  createdAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
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
    match: [/^\S+@\S+\.\S+$/, 'البريد الإلكتروني غير صالح']
  },
  password: {
    type: String,
    required: [true, 'كلمة المرور مطلوبة'],
    minlength: [8, 'كلمة المرور يجب أن تكون على الأقل 8 أحرف']
  },
  image: {
    type: String,
    default: ''
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
}, {
  timestamps: true,
  toJSON: {
    transform(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      delete ret.password;
    }
  }
});

// التحقق من تفرد البريد الإلكتروني قبل الحفظ
userSchema.pre('save', async function(next) {
  try {
    if (this.isModified('email')) {
      const existingUser = await mongoose.models.User.findOne({ 
        email: this.email,
        _id: { $ne: this._id }
      });
      
      if (existingUser) {
        throw new Error('البريد الإلكتروني مستخدم بالفعل');
      }
    }
    next();
  } catch (error) {
    if (error instanceof Error) {
      next(error);
    } else {
      next(new Error('حدث خطأ غير معروف'));
    }
  }
});

// تشفير كلمة المرور قبل الحفظ
userSchema.pre('save', async function(next) {
  try {
    if (!this.isModified('password')) {
      return next();
    }

    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    if (error instanceof Error) {
      next(error);
    } else {
      next(new Error('حدث خطأ في تشفير كلمة المرور'));
    }
  }
});

// دالة مقارنة كلمة المرور
userSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch {
    throw new Error('خطأ في مقارنة كلمة المرور');
  }
};

const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;
