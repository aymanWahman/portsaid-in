import mongoose from 'mongoose';

declare global {
  // eslint-disable-next-line no-var
  var _mongooseCache: {
    conn: mongoose.Connection | null;
    promise: Promise<mongoose.Connection> | null;
  } | null;
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('يرجى تحديد MONGODB_URI في متغيرات البيئة');
}

console.log('🟡 محاولة الاتصال بـ:', MONGODB_URI.replace(/\/\/([^:]+):([^@]+)@/, '//***:***@'));

const options: mongoose.ConnectOptions = {
  bufferCommands: true,
  autoCreate: true,
  autoIndex: true,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 10000, // زيادة وقت الانتظار
  socketTimeoutMS: 45000,
  family: 4,
  ssl: process.env.NODE_ENV === 'production',
  tls: true,
  retryWrites: true,
  w: 'majority'
};

async function connectDB(): Promise<mongoose.Connection> {
  try {
    // التحقق من الاتصال الحالي
    if (mongoose.connection.readyState === 1) {
      console.log('🟢 متصل بقاعدة البيانات (readyState: 1)');
      return mongoose.connection;
    }

    console.log('🟡 حالة الاتصال:', mongoose.connection.readyState);
    console.log('🟡 محاولة اتصال جديدة...');

    // إذا كان هناك محاولة اتصال سابقة
    if (!global._mongooseCache) {
      global._mongooseCache = {
        conn: null,
        promise: null
      };
    }

    if (global._mongooseCache.conn) {
      console.log('🟢 استخدام اتصال موجود من الذاكرة المؤقتة');
      return global._mongooseCache.conn;
    }

    // إذا كان هناك محاولة اتصال جارية
    if (global._mongooseCache.promise) {
      console.log('🟡 انتظار اكتمال الاتصال الحالي...');
      const conn = await global._mongooseCache.promise;
      return conn;
    }

    // بدء اتصال جديد
    console.log('🟡 بدء اتصال جديد...');
    
    global._mongooseCache.promise = mongoose.connect(MONGODB_URI, options)
      .then((mongoose) => {
        console.log('🟢 تم الاتصال بقاعدة البيانات بنجاح');
        console.log('🟢 اسم قاعدة البيانات:', mongoose.connection.name);
        console.log('🟢 المضيف:', mongoose.connection.host);
        return mongoose.connection;
      })
      .catch((error) => {
        global._mongooseCache.promise = null;
        console.error('🔴 خطأ في الاتصال بقاعدة البيانات:', {
          name: error.name,
          message: error.message,
          code: error.code,
          cause: error.cause
        });
        throw error;
      });

    global._mongooseCache.conn = await global._mongooseCache.promise;
    return global._mongooseCache.conn;

  } catch (error) {
    console.error('🔴 خطأ في الاتصال بقاعدة البيانات:', {
      name: error.name,
      message: error.message,
      code: error.code,
      cause: error.cause
    });
    throw error;
  }
}

// إضافة مستمع لأحداث الاتصال
mongoose.connection.on('connected', () => {
  console.log('🟢 تم الاتصال بقاعدة البيانات MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('🔴 خطأ في اتصال MongoDB:', {
    name: err.name,
    message: err.message,
    code: err.code,
    cause: err.cause
  });
});

mongoose.connection.on('disconnected', () => {
  console.log('🟡 تم قطع الاتصال بقاعدة البيانات MongoDB');
});

mongoose.connection.on('reconnected', () => {
  console.log('🟢 تم إعادة الاتصال بقاعدة البيانات MongoDB');
});

// التعامل مع إغلاق التطبيق
process.on('SIGINT', async () => {
  try {
    await mongoose.connection.close();
    console.log('🟢 تم إغلاق اتصال MongoDB بنجاح');
    process.exit(0);
  } catch (err) {
    console.error('🔴 خطأ في إغلاق اتصال MongoDB:', err);
    process.exit(1);
  }
});

export default connectDB;
