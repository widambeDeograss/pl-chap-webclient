"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <span className="material-symbols-outlined text-[20px]">light_mode</span>
            ) : (
                <span className="material-symbols-outlined text-[20px]">dark_mode</span>
            )}
        </button>
    )
}
