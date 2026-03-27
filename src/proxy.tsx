import { NextRequest, NextResponse } from 'next/server'

export function proxy(request: NextRequest) {
    const hostname = request.headers.get('host') || ''
    const url = request.nextUrl.clone()
    const subdomain = hostname.startsWith('perito.')
    if (!subdomain) return NextResponse.next()
    url.pathname = `/perito${url.pathname}`
    return NextResponse.rewrite(url)
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
