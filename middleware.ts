import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// Read admin IPs from environment variable
const getAdminIPs = () => {
  const ips = process.env.ADMIN_IPS?.split(',').map(ip => ip.trim()) || []
  return new Set([...ips, '127.0.0.1', '::1']) // Always include localhost for dev
}

const ALLOWED_IPS = getAdminIPs()

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  const isAdminPage = pathname.startsWith('/admin')
  const isStatsPage = pathname.startsWith('/stats')
  const isTrackApi = pathname.startsWith('/api/track')
  const isPrivatePage = isAdminPage || isStatsPage

  // Only protect:
  // - /admin (all methods)
  // - /stats (all methods)
  // - /api/track GET (allow POST for tracking from any visitor)
  const shouldProtect =
    isAdminPage ||
    isStatsPage ||
    (isTrackApi && req.method === 'GET')

  if (!shouldProtect) {
    return NextResponse.next()
  }

  const ip =
    req.ip ||
    req.headers.get('x-real-ip') ||
    (req.headers.get('x-forwarded-for') || '').split(',')[0]?.trim() ||
    ''

  const isAllowed =
    process.env.NODE_ENV !== 'production' // allow all in dev
    || (ip && ALLOWED_IPS.has(ip))

  if (isAllowed) {
    const response = NextResponse.next()
    if (isPrivatePage) {
      response.headers.set('X-Robots-Tag', 'noindex, nofollow')
    }
    return response
  }

  // Block unauthorized access:
  if (pathname.startsWith('/api/')) {
    return new NextResponse(JSON.stringify({ error: 'Forbidden' }), {
      status: 403,
      headers: {
        'Content-Type': 'application/json',
        'X-Robots-Tag': 'noindex, nofollow',
      },
    })
  }

  const response = NextResponse.redirect(new URL('/', req.url))
  response.headers.set('X-Robots-Tag', 'noindex, nofollow')
  return response
}

export const config = {
  matcher: ['/admin/:path*', '/stats/:path*', '/api/track', '/api/track/:path*'],
}

