import mongoose from 'mongoose';

declare global {
  // eslint-disable-next-line no-var
  var _mongooseCache: {
    conn: mongoose.Connection | null;
    promise: Promise<mongoose.Connection> | null;
  } | null;
}

const getCache = () => {
  if (!global._mongooseCache) {
    global._mongooseCache = {
      conn: null,
      promise: null
    };
  }
  return global._mongooseCache;
};

async function connectDB(): Promise<mongoose.Connection> {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    throw new Error('يرجى تحديد MONGODB_URI في متغيرات البيئة');
  }

  const cache = getCache();

  if (cache.conn) {
    return cache.conn;
  }

  if (!cache.promise) {
    const opts = {
      bufferCommands: false,
    };

    cache.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongoose) => mongoose.connection);
  }

  try {
    const conn = await cache.promise;
    cache.conn = conn;
    return conn;
  } catch (e) {
    cache.promise = null;
    throw e;
  }
}

export default connectDB;
