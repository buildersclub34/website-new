import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Public routes that don't require authentication
const publicRoutes = [
  '/',
  '/admin/signin',
  '/api/auth', // All auth routes are public
  '/_next',
  '/favicon.ico',
  '/404',
  '/500',
  '/images',
  '/fonts',
  '/icons'
];

// API routes that require authentication
const protectedApiRoutes = [
  '/api/admin',
  '/api/dashboard'
];

// Role-based route access
const roleAccess = {
  ADMIN: ['/dashboard', '/admin'],
  EDITOR: ['/dashboard'],
  BUILDER: ['/dashboard'],
  INVESTOR: ['/dashboard'],
} as const;

function isPublicRoute(pathname: string): boolean {
  // Check exact matches first
  if (publicRoutes.includes(pathname)) return true;
  
  // Check path prefixes
  return publicRoutes.some(route => {
    if (route.endsWith('*')) {
      // Handle wildcard routes
      return pathname.startsWith(route.slice(0, -1));
    }
    return pathname.startsWith(`${route}/`);
  }) || 
  pathname.startsWith('/_next/') ||
  pathname.startsWith('/api/trpc/') ||
  pathname.endsWith('.js') ||
  pathname.endsWith('.css') ||
  pathname.endsWith('.png') ||
  pathname.endsWith('.jpg') ||
  pathname.endsWith('.jpeg') ||
  pathname.endsWith('.svg');
}

function hasRoleAccess(userRole: string | undefined, pathname: string): boolean {
  if (!userRole) return false;
  const routes = roleAccess[userRole as keyof typeof roleAccess] || [];
  return routes.some(route => pathname === route || pathname.startsWith(`${route}/`));
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get('next-auth.session-token')?.value || 
               req.cookies.get('__Secure-next-auth.session-token')?.value;
  
  // Skip middleware for public routes
  if (isPublicRoute(pathname)) {
    return NextResponse.next();
  }

  // Handle API routes
  if (pathname.startsWith('/api/')) {
    // Check if this is a protected API route
    const isProtectedApi = protectedApiRoutes.some(route => 
      pathname.startsWith(route)
    );

    if (isProtectedApi) {
      if (!token) {
        return new NextResponse(
          JSON.stringify({ error: 'Authentication required' }),
          { status: 401, headers: { 'Content-Type': 'application/json' } }
        );
      }

      try {
        // Verify the token is valid
        const response = await fetch(`${req.nextUrl.origin}/api/auth/session`, {
          headers: { Cookie: req.headers.get('cookie') || '' },
        });

        if (!response.ok) {
          return new NextResponse(
            JSON.stringify({ error: 'Invalid session' }),
            { status: 401, headers: { 'Content-Type': 'application/json' } }
          );
        }
      } catch (error) {
        console.error('Session validation error:', error);
        return new NextResponse(
          JSON.stringify({ error: 'Internal server error' }),
          { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    return NextResponse.next();
  }

  // For non-API routes, redirect to login if no token
  if (!token) {
    const loginUrl = new URL('/admin/signin', req.url);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Handle admin routes
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/signin')) {
    // Verify token and check user role
    try {
      const response = await fetch(new URL('/api/auth/session', req.url).toString(), {
        headers: { cookie: `next-auth.session-token=${token}` }
      });
      
      const session = await response.json();
      
      // If session is invalid, redirect to signin
      if (!session?.user) {
        const signInUrl = new URL('/admin/signin', req.url);
        signInUrl.searchParams.set('callbackUrl', pathname);
        return NextResponse.redirect(signInUrl);
      }
      
      // If user doesn't have admin role, show 403
      if (session.user.role !== 'ADMIN') {
        return new NextResponse('Forbidden', { status: 403 });
      }
      
      // Continue with the request if everything is fine
      return NextResponse.next();
    } catch (error) {
      console.error('Auth verification error:', error);
      const signInUrl = new URL('/admin/signin', req.url);
      signInUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(signInUrl);
    }
  }

  // Handle dashboard routes
  if (pathname.startsWith('/dashboard')) {
    if (!token) {
      return NextResponse.redirect(new URL('/auth/signin', req.url));
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api/auth|_next/static|_next/image|favicon.ico|images|fonts|icons).*)',
  ],
};
