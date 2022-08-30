import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {

  const response = NextResponse.next()

  if (!request.cookies.get('token') && request.nextUrl.pathname.startsWith('/profil')) {

    return NextResponse.rewrite(new URL('/', request.url))
  }
 

}