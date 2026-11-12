import { NextRequest, NextResponse } from 'next/server'
import { isMainProductionHost, isPeritoHost, PERITO_SITE_URL } from '@/services/site/site-host'

export function proxy(request: NextRequest) {
    const host = request.headers.get('host')
    const { pathname, search } = request.nextUrl

    if (isMainProductionHost(host) && (pathname === '/perito' || pathname.startsWith('/perito/'))) {
        const target = pathname.slice('/perito'.length) || '/'
        return NextResponse.redirect(`${PERITO_SITE_URL}${target}${search}`, 301)
    }

    if (!isPeritoHost(host)) return NextResponse.next()

    const url = request.nextUrl.clone()
    url.pathname = `/perito${pathname}`
    return NextResponse.rewrite(url)
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
