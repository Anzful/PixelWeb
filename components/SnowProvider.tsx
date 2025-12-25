'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import SnowEffect from './SnowEffect'

interface SnowContextType {
    snowEnabled: boolean
    toggleSnow: () => void
}

const SnowContext = createContext<SnowContextType | undefined>(undefined)

export const useSnow = () => {
    const context = useContext(SnowContext)
    if (!context) {
        throw new Error('useSnow must be used within a SnowProvider')
    }
    return context
}

interface SnowProviderProps {
    children: ReactNode
}

export const SnowProvider = ({ children }: SnowProviderProps) => {
    const [snowEnabled, setSnowEnabled] = useState(true) // Default to enabled for winter vibes
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        // Get saved preference from localStorage, default to true (enabled)
        const savedPreference = localStorage.getItem('snowEnabled')
        if (savedPreference !== null) {
            setSnowEnabled(savedPreference === 'true')
        }
    }, [])

    const toggleSnow = () => {
        const newValue = !snowEnabled
        setSnowEnabled(newValue)
        localStorage.setItem('snowEnabled', String(newValue))
    }

    // During SSR, render with default state
    if (!mounted) {
        return (
            <SnowContext.Provider value={{ snowEnabled: true, toggleSnow: () => { } }}>
                {children}
            </SnowContext.Provider>
        )
    }

    return (
        <SnowContext.Provider value={{ snowEnabled, toggleSnow }}>
            {children}
            <SnowEffect enabled={snowEnabled} />
        </SnowContext.Provider>
    )
}
