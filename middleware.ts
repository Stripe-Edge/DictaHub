import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Basic role-based access logic (scaffold)
  // In a real app, verify JWT and check roles
  const isLoggedIn = true; // Placeholder
  const userRole: 'STUDENT' | 'INSTRUCTOR' | 'ADMIN' = 'STUDENT'; // Placeholder

  if (path.startsWith('/portal/dashboard/admin') && (userRole as string) !== 'ADMIN') {
    return NextResponse.redirect(new URL('/portal/dashboard', request.url));
  }

  if (path.startsWith('/portal/dashboard/instructor') && (userRole as string) !== 'INSTRUCTOR' && (userRole as string) !== 'ADMIN') {
    return NextResponse.redirect(new URL('/portal/dashboard', request.url));
  }

  if (path.startsWith('/portal') && !path.includes('/login') && !isLoggedIn) {
    return NextResponse.redirect(new URL('/portal/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/portal/:path*', '/api/admin/:path*'],
};
