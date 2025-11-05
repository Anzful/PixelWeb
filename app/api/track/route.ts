import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

// Simple in-memory storage (for development)
// For production, you'd use a database like Vercel KV, Redis, or PostgreSQL
let visitData = {
  totalVisits: 0,
  uniqueVisitors: new Set<string>(),
  pageViews: {} as Record<string, number>,
  lastVisits: [] as Array<{
    page: string
    timestamp: string
    userAgent: string
    ip: string
  }>
}

export async function POST(request: Request) {
  try {
    const { page } = await request.json()
    const headersList = headers()
    const userAgent = headersList.get('user-agent') || 'Unknown'
    const ip = headersList.get('x-forwarded-for') || 
               headersList.get('x-real-ip') || 
               'Unknown'

    // Track visit
    visitData.totalVisits++
    visitData.uniqueVisitors.add(ip)
    
    // Track page views
    if (!visitData.pageViews[page]) {
      visitData.pageViews[page] = 0
    }
    visitData.pageViews[page]++

    // Store last 100 visits
    visitData.lastVisits.unshift({
      page,
      timestamp: new Date().toISOString(),
      userAgent,
      ip: ip.split(',')[0] // Get first IP if multiple
    })
    
    if (visitData.lastVisits.length > 100) {
      visitData.lastVisits = visitData.lastVisits.slice(0, 100)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Tracking error:', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({
    totalVisits: visitData.totalVisits,
    uniqueVisitors: visitData.uniqueVisitors.size,
    pageViews: visitData.pageViews,
    lastVisits: visitData.lastVisits.slice(0, 20), // Return only last 20
  })
}

