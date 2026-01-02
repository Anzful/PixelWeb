'use client'

import { useEffect, useState, useMemo } from 'react'

interface Snowflake {
    id: number
    x: number
    delay: number
    duration: number
    size: number
    opacity: number
    character: string
}

interface SnowEffectProps {
    enabled: boolean
}

const SnowEffect = ({ enabled }: SnowEffectProps) => {
    const [mounted, setMounted] = useState(false)
    const [reducedMotion, setReducedMotion] = useState(false)

    useEffect(() => {
        setMounted(true)
        // Respect user's reduced motion preference
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
        setReducedMotion(mediaQuery.matches)

        const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
        mediaQuery.addEventListener('change', handler)
        return () => mediaQuery.removeEventListener('change', handler)
    }, [])

    // Reduced particle count (40 instead of 120) + simpler characters for better performance
    const snowflakes = useMemo(() => {
        const flakes: Snowflake[] = []
        const characters = ['❄', '❅', '•', '·', '✦']

        // Only 40 particles for smoother performance
        for (let i = 0; i < 40; i++) {
            flakes.push({
                id: i,
                x: Math.random() * 100,
                delay: Math.random() * 8,
                duration: Math.random() * 10 + 15,
                size: Math.random() * 10 + 6,
                opacity: Math.random() * 0.4 + 0.2,
                character: characters[Math.floor(Math.random() * characters.length)],
            })
        }
        return flakes
    }, [])

    if (!enabled || !mounted || reducedMotion) return null

    return (
        <div
            className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden"
            aria-hidden="true"
        >
            <style jsx>{`
                @keyframes snowfall {
                    0% {
                        transform: translateY(-10vh) translateX(0);
                        opacity: 0;
                    }
                    10% {
                        opacity: var(--opacity);
                    }
                    90% {
                        opacity: var(--opacity);
                    }
                    100% {
                        transform: translateY(110vh) translateX(20px);
                        opacity: 0;
                    }
                }
                .snowflake {
                    position: absolute;
                    color: rgba(255, 255, 255, 0.8);
                    animation: snowfall linear infinite;
                    will-change: transform;
                }
            `}</style>
            {snowflakes.map(flake => (
                <div
                    key={flake.id}
                    className="snowflake"
                    style={{
                        left: `${flake.x}%`,
                        fontSize: `${flake.size}px`,
                        animationDuration: `${flake.duration}s`,
                        animationDelay: `${flake.delay}s`,
                        ['--opacity' as string]: flake.opacity,
                    }}
                >
                    {flake.character}
                </div>
            ))}
        </div>
    )
}

export default SnowEffect
