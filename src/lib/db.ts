import mongoose from 'mongoose';

declare global {
  // eslint-disable-next-line no-var
  var _mongooseCache: { 
    conn: null | typeof mongoose; 
    promise: null | Promise<typeof mongoose> 
  };
}

if (!global._mongooseCache) {
  global._mongooseCache = { conn: null, promise: null };
}

if (!process.env.MONGODB_URI) {
  throw new Error('يرجى تحديد MONGODB_URI في ملف .env.local');
}

const MONGODB_URI: string = process.env.MONGODB_URI;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  bufferCommands: false,
} as const;

const dbConnect = Object.assign(async function(): Promise<typeof mongoose> {
  if (global._mongooseCache.conn) {
    return global._mongooseCache.conn;
  }

  if (!global._mongooseCache.promise) {
    global._mongooseCache.promise = mongoose.connect(MONGODB_URI, options)
      .then((mongoose) => {
        console.log('✅ تم الاتصال بقاعدة البيانات بنجاح');
        return mongoose;
      });
  }

  try {
    global._mongooseCache.conn = await global._mongooseCache.promise;
  } catch (err) {
    global._mongooseCache.promise = null;
    throw err;
  }

  return global._mongooseCache.conn;
}, {
  connect() {
    return dbConnect();
  }
});

export default dbConnect;
