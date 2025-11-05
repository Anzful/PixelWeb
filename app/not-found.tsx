'use client'

import Link from 'next/link'
import { FaHome, FaArrowLeft } from 'react-icons/fa'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="text-center max-w-2xl">
        {/* 404 Animation */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold text-primary-600 dark:text-primary-400 animate-pulse">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            გვერდი ვერ მოიძებნა
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
            სამწუხაროდ, თქვენს მიერ მოთხოვნილი გვერდი არ არსებობს.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            შესაძლოა ის წაშლილია, გადატანილია ან არასწორად აკრეფეთ მისამართი.
          </p>
        </div>

        {/* Illustration */}
        <div className="mb-12 text-8xl">
          🔍
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all hover:shadow-lg transform hover:-translate-y-0.5 font-semibold"
          >
            <FaHome className="mr-2" />
            მთავარ გვერდზე დაბრუნება
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all font-semibold"
          >
            <FaArrowLeft className="mr-2" />
            უკან დაბრუნება
          </button>
        </div>

        {/* Popular Pages */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            ან აირჩიეთ ერთ-ერთი პოპულარული გვერდიდან:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/services"
              className="text-sm px-4 py-2 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-700 transition-all border border-gray-200 dark:border-gray-600"
            >
              სერვისები
            </Link>
            <Link
              href="/portfolio"
              className="text-sm px-4 py-2 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-700 transition-all border border-gray-200 dark:border-gray-600"
            >
              პორტფოლიო
            </Link>
            <Link
              href="/about"
              className="text-sm px-4 py-2 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-700 transition-all border border-gray-200 dark:border-gray-600"
            >
              ჩვენ შესახებ
            </Link>
            <Link
              href="/contact"
              className="text-sm px-4 py-2 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-700 transition-all border border-gray-200 dark:border-gray-600"
            >
              კონტაქტი
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

