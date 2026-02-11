"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { ShieldAlert, Loader2 } from "lucide-react"
import { ThemeToggle } from "@/components/ThemeToggle"

export default function LoginPage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        // Simulate login delay
        setTimeout(() => {
            router.push("/dashboard")
        }, 1500)
    }

    return (
        <div className="min-h-screen grid lg:grid-cols-2 bg-background-light dark:bg-background-dark overflow-hidden">
            {/* Visual Side */}
            <div className="hidden lg:flex relative bg-slate-900 overflow-hidden items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_tkBWY8-I6i_Pd_msRTUh_dO8vnPMaGNKPK6PjYfzvtcf5BjSlaGX_j-IF5fqFGrmKA1Ex5jMda-xtsLIe6ZK4i7A_QfQIdfxWS4kSh4OK0aezt93XrDsuvZrPplOYeqs257oISFO0QRcFtoLV7Ix74DUMx_eSgN15DDIxIN39eV3rC52uKD0zRgGnHllyyCQfi_00cTGepI7z1vmYglx7M-fSxjc_jwmnSk1k2tm1MLGvHL_b3GxntCLen8d6Vh2pAgOz54kosI"
                        alt="Map Background"
                        className="w-full h-full object-cover opacity-40 mix-blend-overlay grayscale contrast-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent"></div>
                </div>

                {/* Floating Elements Animation */}
                <div className="relative z-10 w-full max-w-md space-y-8 p-12">
                    <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-6 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <div className="size-2 bg-red-500 rounded-full animate-pulse"></div>
                                <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Active Incident</span>
                            </div>
                            <span className="text-[10px] font-mono text-slate-400">#INC-8821</span>
                        </div>
                        <h3 className="font-bold text-white text-lg mb-1">Armed Robbery - Kariakoo</h3>
                        <p className="text-slate-400 text-sm">Units dispatched to Aggrey St. Aerial support requested.</p>
                        <div className="mt-4 flex -space-x-2">
                            <div className="size-8 rounded-full border-2 border-slate-800 bg-slate-600"></div>
                            <div className="size-8 rounded-full border-2 border-slate-800 bg-slate-500"></div>
                            <div className="flex items-center justify-center size-8 rounded-full border-2 border-slate-800 bg-primary text-[10px] font-bold text-white">+5</div>
                        </div>
                    </div>

                    <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-6 rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 ml-12">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-green-500 text-sm">verified</span>
                                <span className="text-xs font-bold text-green-400 uppercase tracking-wider">System Operational</span>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-400">Active Units</span>
                                <span className="font-mono font-bold text-white">412</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-400">Response Time</span>
                                <span className="font-mono font-bold text-white">8.4m</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Login Form Side */}
            <div className="flex flex-col items-center justify-center p-8 lg:p-12 relative">
                <div className="absolute top-8 right-8">
                    <ThemeToggle />
                </div>

                <div className="w-full max-w-sm space-y-8">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center p-3 rounded-xl bg-primary/10 mb-6">
                            <ShieldAlert className="h-10 w-10 text-primary" />
                        </div>
                        <h1 className="text-3xl font-bold tracking-tighter text-slate-900 dark:text-white">Police Chap Chap</h1>
                        <p className="text-slate-500 dark:text-slate-400 mt-2">Enter your credentials to access the command center.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-900 dark:text-white" htmlFor="email">Badge ID or Email</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">badge</span>
                                <input
                                    id="email"
                                    type="text"
                                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                                    placeholder="e.g. TZ-8821 or officer@police.go.tz"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-bold text-slate-900 dark:text-white" htmlFor="password">Password</label>
                                <a href="#" className="text-xs font-semibold text-primary hover:text-blue-600">Forgot password?</a>
                            </div>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">lock</span>
                                <input
                                    id="password"
                                    type="password"
                                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-primary/25 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <Loader2 className="h-5 w-5 animate-spin" />
                            ) : (
                                <>
                                    <span className="material-symbols-outlined text-[20px]">login</span>
                                    Authenticate Session
                                </>
                            )}
                        </button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background-light dark:bg-background-dark px-2 text-slate-500">Or continue with</span>
                        </div>
                    </div>

                    <button className="w-full bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-2 transition-all">
                        <svg className="h-5 w-5" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Google Workspace
                    </button>

                    <p className="text-center text-xs text-slate-500 dark:text-slate-400">
                        Protected by reCAPTCHA and subject to the <a href="#" className="underline hover:text-primary">Privacy Policy</a> and <a href="#" className="underline hover:text-primary">Terms of Service</a>.
                    </p>
                </div>
            </div>
        </div>
    )
}
