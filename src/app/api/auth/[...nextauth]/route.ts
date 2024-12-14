import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import bcrypt from "bcryptjs";
import connectDB from "../../../../lib/db";
import User from "../../../../models/User";


const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error('الرجاء إدخال البريد الإلكتروني وكلمة المرور');
          }

          await connectDB();

          const user = await User.findOne({ email: credentials.email });

          if (!user) {
            throw new Error('لم يتم العثور على حساب بهذا البريد الإلكتروني');
          }

          const isPasswordMatch = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isPasswordMatch) {
            throw new Error('كلمة المرور غير صحيحة');
          }

          return {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
            image: user.image,
            role: user.role || 'user',
          };
        } catch (error) {
          console.error('خطأ في المصادقة:', error);
          throw error;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    }
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
    newUser: '/auth/signup'
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
