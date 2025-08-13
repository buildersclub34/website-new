import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { DefaultUser, NextAuthOptions, SessionStrategy, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from './prisma';
import { compare } from 'bcryptjs';

type UserRole = 'USER' | 'EDITOR' | 'ADMIN' | 'BUILDER' | 'INVESTOR' | 'PENDING' | 'REJECTED';

// Extend the User type to include role
interface UserWithRole extends User {
  id: string;
  role: UserRole;
  name: string | null;
  email: string | null;
  image?: string | null;
}

declare module 'next-auth' {
  interface User {
    role: UserRole;
  }
  
  interface Session {
    user: {
      id: string;
      role: UserRole;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    role: UserRole;
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma as any),
  secret: process.env.NEXTAUTH_SECRET || '',
  session: {
    strategy: 'jwt' as SessionStrategy,
  },
  pages: {
    signIn: '/admin/signin',
    signOut: '/',
    error: '/admin/signin',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Please enter your email and password');
        }

        try {
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });

          if (!user || !user.password) {
            throw new Error('No user found with this email');
          }

          const isPasswordValid = await compare(credentials.password, user.password);

          if (!isPasswordValid) {
            throw new Error('Incorrect password');
          }

          // Return a user object that matches the UserWithRole interface
          const userWithRole: UserWithRole = {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role as UserRole,
            image: user.image || null,
          };

          return userWithRole;
        } catch (error) {
          console.error('Authentication error:', error);
          throw new Error('Authentication failed');
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as UserWithRole).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as UserRole;
      }
      return session;
    },
  },
};
