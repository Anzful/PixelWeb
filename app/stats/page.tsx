'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaEye, FaUsers, FaChartBar, FaClock, FaShieldAlt, FaSpinner } from 'react-icons/fa'
import PageTransition from '@/components/PageTransition'
import Link from 'next/link'

// Admin IP whitelist
const ADMIN_IPS = [
  '31.146.70.219',
]

interface VisitData {
  totalVisits: number
  uniqueVisitors: number
  pageViews: Record<string, number>
  lastVisits: Array<{
    page: string
    timestamp: string
    userAgent: string
    ip: string
  }>
}

export default function StatsPage() {
  const [data, setData] = useState<VisitData | null>(null)
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null)
  const [userIP, setUserIP] = useState<string>('')

  // Check admin access
  useEffect(() => {
    const checkAdminAccess = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json')
        const data = await response.json()
        const ip = data.ip
        setUserIP(ip)
        setIsAdmin(ADMIN_IPS.includes(ip))
      } catch (error) {
        console.error('Failed to verify admin access')
        setIsAdmin(false)
      }
    }
    checkAdminAccess()
  }, [])

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/track')
      const stats = await response.json()
      setData(stats)
    } catch (error) {
      console.error('Failed to fetch stats:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isAdmin) {
    fetchStats()
    const interval = setInterval(fetchStats, 30000)
    return () => clearInterval(interval)
    }
  }, [isAdmin])

  // Checking access
  if (isAdmin === null) {
    return (
      <PageTransition>
        <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="text-center">
            <FaSpinner className="text-4xl text-primary-600 animate-spin mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400">იტვირთება...</p>
          </div>
        </div>
      </PageTransition>
    )
  }

  // Access denied
  if (!isAdmin) {
    return (
      <PageTransition>
        <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-md mx-auto px-4"
          >
            <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaShieldAlt className="text-4xl text-red-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              წვდომა აკრძალულია
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              სტატისტიკის გვერდი მხოლოდ ადმინისტრატორებისთვისაა ხელმისაწვდომი.
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-6">
              თქვენი IP: {userIP}
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
            >
              მთავარ გვერდზე დაბრუნება
            </Link>
          </motion.div>
        </div>
      </PageTransition>
    )
  }

  if (loading) {
    return (
      <PageTransition>
        <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="text-center">
            <FaSpinner className="text-4xl text-primary-600 animate-spin mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400">სტატისტიკა იტვირთება...</p>
          </div>
        </div>
      </PageTransition>
    )
  }

  const pageNames: Record<string, string> = {
    '/': 'მთავარი',
    '/services': 'სერვისები',
    '/portfolio': 'პორტფოლიო',
    '/about': 'ჩვენ შესახებ',
    '/contact': 'კონტაქტი',
    '/admin': 'ადმინ პანელი',
    '/stats': 'სტატისტიკა',
    '/tiktok': 'TikTok Downloader',
  }

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium px-3 py-1 rounded-full">
                <FaShieldAlt className="text-xs" />
                ადმინისტრატორი
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              📊 ვებსაიტის სტატისტიკა
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              რეალურ დროში განახლებული მონაცემები
            </p>
            <div className="flex gap-3 mt-4">
            <button
              onClick={fetchStats}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm"
            >
              🔄 განახლება
            </button>
              <Link
                href="/admin"
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm"
              >
                ← ადმინ პანელი
              </Link>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-2">
                <FaEye className="text-3xl text-blue-600" />
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  {data?.totalVisits || 0}
                </span>
              </div>
              <h3 className="text-gray-600 dark:text-gray-400 font-medium">
                სულ ვიზიტები
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-2">
                <FaUsers className="text-3xl text-green-600" />
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  {data?.uniqueVisitors || 0}
                </span>
              </div>
              <h3 className="text-gray-600 dark:text-gray-400 font-medium">
                უნიკალური ვიზიტორები
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-2">
                <FaChartBar className="text-3xl text-purple-600" />
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  {Object.keys(data?.pageViews || {}).length}
                </span>
              </div>
              <h3 className="text-gray-600 dark:text-gray-400 font-medium">
                ნანახი გვერდები
              </h3>
            </motion.div>
          </div>

          {/* Page Views */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <FaChartBar className="mr-3 text-primary-600" />
              გვერდების ნახვები
            </h2>
            <div className="space-y-3">
              {Object.entries(data?.pageViews || {})
                .sort(([, a], [, b]) => b - a)
                .map(([page, views]) => (
                  <div key={page} className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {pageNames[page] || page}
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="w-48 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-primary-600 h-2 rounded-full transition-all"
                          style={{
                            width: `${(views / (data?.totalVisits || 1)) * 100}%`,
                          }}
                        />
                      </div>
                      <span className="text-xl font-bold text-gray-900 dark:text-white w-12 text-right">
                        {views}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>

          {/* Recent Visits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <FaClock className="mr-3 text-primary-600" />
              ბოლო ვიზიტები (20)
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b dark:border-gray-700">
                    <th className="text-left py-3 px-4 text-gray-600 dark:text-gray-400 font-medium">
                      გვერდი
                    </th>
                    <th className="text-left py-3 px-4 text-gray-600 dark:text-gray-400 font-medium">
                      დრო
                    </th>
                    <th className="text-left py-3 px-4 text-gray-600 dark:text-gray-400 font-medium hidden md:table-cell">
                      IP
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.lastVisits.map((visit, index) => (
                    <tr
                      key={index}
                      className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <td className="py-3 px-4 text-gray-900 dark:text-white font-medium">
                        {pageNames[visit.page] || visit.page}
                      </td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-400 text-sm">
                        {new Date(visit.timestamp).toLocaleString('ka-GE')}
                      </td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-400 text-sm hidden md:table-cell">
                        {visit.ip}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Note */}
          <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>ℹ️ შენიშვნა:</strong> ეს არის მარტივი in-memory ტრეკერი. მონაცემები განულდება სერვერის რესტარტისას. 
              პროდუქციისთვის გირჩევთ Vercel Analytics-ს ან დატაბაზის გამოყენებას.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
