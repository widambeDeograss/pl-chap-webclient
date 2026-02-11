"use client"

import { Search, Bell, MapPin } from "lucide-react"

export function Header() {
    return (
        <header className="h-16 flex items-center justify-between px-6 bg-white dark:bg-[#111722] border-b border-slate-200 dark:border-slate-800 shrink-0 z-10 w-full">
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                    <MapPin className="h-5 w-5 text-slate-400" />
                    <span className="font-bold">Dar es Salaam Region</span>
                </div>
                <div className="h-6 w-px bg-slate-200 dark:bg-slate-800"></div>
                <div className="flex gap-4">
                    <div className="flex items-center gap-1.5 text-sm font-medium text-slate-500 dark:text-slate-400">
                        <span className="h-2 w-2 rounded-full bg-green-500"></span>
                        342 Units On-Duty
                    </div>
                    <div className="flex items-center gap-1.5 text-sm font-medium text-slate-500 dark:text-slate-400">
                        <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                        12 SOS Alerts
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative w-64 hidden md:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <input
                        className="w-full bg-slate-100 dark:bg-slate-900 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary outline-none transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                        placeholder="Search Unit, Area or ID..."
                        type="text"
                    />
                </div>

                <button className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg relative transition-colors">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border-2 border-white dark:border-[#111722]"></span>
                </button>

                <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-800">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-bold leading-none text-slate-900 dark:text-white">Insp. Juma</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium uppercase tracking-tight">Senior Dispatcher</p>
                    </div>
                    <div className="h-9 w-9 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden ring-2 ring-white dark:ring-slate-800">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            className="w-full h-full object-cover"
                            alt="Senior Police Dispatcher Profile Photo"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNBdfbzlmF-ZutebcOIinrl6R-3qUP6wf9jOUCIh-s99pIVVQY6eUsv8WT6yAyVlPT9MnWm8hvUDJa2grH2BLkn84dHpg1wRwjqz_g_hLzqXy3ulE-L_WWmSNJQXiHj3sM4ZA6jztwfKjL0IrLKlcYcgWTz-RinfdDfiSIHBoAWm_mhFBB0Q-yPBUaW45Bj3hx8u-yB9weE5xSl8QF3vUDCKVQK-eLuVJ8ARSzC2_ukxPwU19wPWy1afQ6niNqetE3nSrcKANBpaY"
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}
