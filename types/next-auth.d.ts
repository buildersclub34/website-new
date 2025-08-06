import { DefaultSession } from 'next-auth';

type UserRole = 'USER' | 'EDITOR' | 'ADMIN' | 'BUILDER' | 'INVESTOR';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      role: UserRole;
    } & DefaultSession['user'];
  }

  interface User {
    role: UserRole;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role: UserRole;
  }
}
