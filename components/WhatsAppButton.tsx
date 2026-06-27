'use client'

import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_INTL = '995557100020'

const WhatsAppButton = () => {
    const waHref = `https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent('გამარჯობა, მაინტერესებს ვებსაიტი PixelWeb.ge-ზე')}`

    return (
        <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 hidden md:flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="WhatsApp-ით დაკავშირება"
        >
            <FaWhatsapp className="text-2xl" />
        </a>
    )
}

export default WhatsAppButton
