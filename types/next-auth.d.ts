import { DefaultSession, DefaultUser } from 'next-auth';

type Role = 'USER' | 'EDITOR' | 'ADMIN' | 'BUILDER' | 'INVESTOR' | 'PENDING' | 'REJECTED';

declare module 'next-auth' {
  interface User extends DefaultUser {
    id: string;
    role: Role;
  }

  interface Session extends DefaultSession {
    user: {
      id: string;
      role: Role;
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    role: Role;
  }
}

export type { Role as UserRole };
