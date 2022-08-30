import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { setCookie,getCookie } from 'cookies-next';

export async function middleware(request: NextRequest) {

  const response = NextResponse.next()
  const cookie =await getCookie('token')

  if (!cookie && request.nextUrl.pathname.startsWith('/profil')) {

    return NextResponse.rewrite(new URL('/', request.url))
  }
}