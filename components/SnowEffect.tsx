'use client'

import { useEffect, useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Snowflake {
    id: number
    x: number
    delay: number
    duration: number
    size: number
    opacity: number
    drift: number
    rotation: number
    character: string
}

interface SnowEffectProps {
    enabled: boolean
}

const SnowEffect = ({ enabled }: SnowEffectProps) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    // Generate snowflakes with varied properties for natural look
    const snowflakes = useMemo(() => {
        const flakes: Snowflake[] = []
        const characters = ['❄', '❅', '❆', '•', '·']

        // Increased count to 100 for "more snow"
        for (let i = 0; i < 100; i++) {
            flakes.push({
                id: i,
                x: Math.random() * 100,
                delay: Math.random() * 8, // Staggered start
                duration: Math.random() * 10 + 15, // Slow: 15-25 seconds to fall
                size: Math.random() * 12 + 8, // Larger for visibility (8-20px)
                opacity: Math.random() * 0.4 + 0.3, // 0.3-0.7 opacity
                drift: Math.random() * 100 - 50, // -50 to 50px horizontal drift
                rotation: Math.random() * 360,
                character: characters[Math.floor(Math.random() * characters.length)],
            })
        }
        return flakes
    }, [])

    if (!enabled || !mounted) return null

    return (
        <AnimatePresence>
            <div
                className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden mix-blend-screen"
                aria-hidden="true"
            >
                {snowflakes.map(flake => (
                    <motion.div
                        key={flake.id}
                        className="absolute select-none text-white/80"
                        initial={{
                            top: '-10%',
                            left: `${flake.x}%`,
                            opacity: 0,
                            rotate: flake.rotation,
                        }}
                        animate={{
                            top: ['-10%', '110%'],
                            left: [`${flake.x}%`, `${flake.x + flake.drift}%`],
                            opacity: [0, flake.opacity, flake.opacity, 0],
                            rotate: [flake.rotation, flake.rotation + 360],
                        }}
                        transition={{
                            duration: flake.duration,
                            delay: flake.delay,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                        style={{
                            fontSize: `${flake.size}px`,
                            textShadow: '0 0 2px rgba(255,255,255,0.4)',
                            filter: `blur(${flake.character === '•' ? 0.5 : 0}px)`,
                        }}
                    >
                        {flake.character}
                    </motion.div>
                ))}
            </div>
        </AnimatePresence>
    )
}

export default SnowEffect
