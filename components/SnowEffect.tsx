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
    color: string
}

interface SnowEffectProps {
    enabled: boolean
}

const SnowEffect = ({ enabled }: SnowEffectProps) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    // Generate snowflakes with festive 2026 New Year vibes
    const snowflakes = useMemo(() => {
        const flakes: Snowflake[] = []
        // Snow + festive sparkles ✨
        const characters = ['❄', '❅', '❆', '•', '·', '✧', '✦', '⋆', '✨', '🎄', '⭐']
        // Festive colors - white, gold, light blue
        const colors = [
            'rgba(255, 255, 255, 0.9)',
            'rgba(255, 255, 255, 0.8)',
            'rgba(255, 215, 0, 0.7)',   // Gold
            'rgba(255, 223, 186, 0.6)', // Champagne
            'rgba(173, 216, 230, 0.7)', // Light blue
        ]

        // 120 particles for festive feel
        for (let i = 0; i < 120; i++) {
            const charIndex = Math.floor(Math.random() * characters.length)
            const isSpecial = charIndex >= 5 // Stars and sparkles

            flakes.push({
                id: i,
                x: Math.random() * 100,
                delay: Math.random() * 10,
                duration: Math.random() * 12 + 12, // 12-24 seconds
                size: isSpecial
                    ? Math.random() * 16 + 10  // Larger for stars (10-26px)
                    : Math.random() * 10 + 6,  // Regular snow (6-16px)
                opacity: isSpecial
                    ? Math.random() * 0.5 + 0.4 // Brighter stars
                    : Math.random() * 0.4 + 0.2,
                drift: Math.random() * 80 - 40,
                rotation: Math.random() * 360,
                character: characters[charIndex],
                color: isSpecial
                    ? colors[Math.floor(Math.random() * 2) + 2] // Gold/champagne for stars
                    : colors[Math.floor(Math.random() * 2)],     // White for snow
            })
        }
        return flakes
    }, [])

    if (!enabled || !mounted) return null

    return (
        <AnimatePresence>
            <div
                className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden"
                aria-hidden="true"
            >
                {snowflakes.map(flake => (
                    <motion.div
                        key={flake.id}
                        className="absolute select-none"
                        initial={{
                            top: '-10%',
                            left: `${flake.x}%`,
                            opacity: 0,
                            rotate: flake.rotation,
                            scale: 0.5,
                        }}
                        animate={{
                            top: ['-10%', '110%'],
                            left: [`${flake.x}%`, `${flake.x + flake.drift}%`],
                            opacity: [0, flake.opacity, flake.opacity, 0],
                            rotate: [flake.rotation, flake.rotation + (flake.character.includes('✨') ? 720 : 360)],
                            scale: [0.5, 1, 1, 0.5],
                        }}
                        transition={{
                            duration: flake.duration,
                            delay: flake.delay,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                        style={{
                            fontSize: `${flake.size}px`,
                            color: flake.color,
                            textShadow: flake.character.includes('✧') || flake.character.includes('✦') || flake.character.includes('⭐')
                                ? '0 0 8px rgba(255, 215, 0, 0.6), 0 0 4px rgba(255, 255, 255, 0.8)'
                                : '0 0 3px rgba(255,255,255,0.5)',
                            filter: flake.character === '•' || flake.character === '·'
                                ? 'blur(0.5px)'
                                : 'none',
                        }}
                    >
                        {flake.character}
                    </motion.div>
                ))}

                {/* Floating "2026" in the background */}
                <motion.div
                    className="absolute top-1/4 left-1/2 -translate-x-1/2 text-6xl sm:text-8xl font-black select-none pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 0.03, 0.03, 0],
                        y: [0, -20, 0],
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    style={{
                        background: 'linear-gradient(135deg, rgba(255,215,0,0.3), rgba(255,255,255,0.2))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '0 0 40px rgba(255, 215, 0, 0.1)',
                    }}
                >
                    2026
                </motion.div>
            </div>
        </AnimatePresence>
    )
}

export default SnowEffect
