'use client'

import { useMemo } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { FaWhatsapp, FaPhone, FaPaperPlane } from 'react-icons/fa'

const PHONE_E164 = '+995591410914'
const WHATSAPP_INTL = '995591410914'

function buildWhatsAppHref(pathname: string, search: string) {
  const base = `https://wa.me/${WHATSAPP_INTL}`
  const message = `გამარჯობა, მაინტერესებს ვებსაიტი PixelWeb.ge-ზე.\nგვერდი: ${pathname}${search ? `?${search}` : ''}`
  const params = new URLSearchParams({ text: message })
  return `${base}?${params.toString()}`
}

function buildContactHref(search: string) {
  return `/contact${search ? `?${search}` : ''}`
}

const StickyContactBar = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const search = useMemo(() => searchParams?.toString() || '', [searchParams])

  const waHref = useMemo(() => buildWhatsAppHref(pathname, search), [pathname, search])
  const callHref = `tel:${PHONE_E164}`
  const contactHref = useMemo(() => buildContactHref(search), [search])

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden">
      <div className="mx-3 mb-3 rounded-xl shadow-2xl backdrop-blur bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between gap-2 p-2">
          <a
            href={waHref}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition-colors"
          >
            <FaWhatsapp />
            WhatsApp
          </a>
          <a
            href={callHref}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 rounded-lg transition-colors"
          >
            <FaPhone />
            დარეკვა
          </a>
          <a
            href={contactHref}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-2 rounded-lg transition-colors"
          >
            <FaPaperPlane />
            კონტაქტი
          </a>
        </div>
      </div>
    </div>
  )
}

export default StickyContactBar


