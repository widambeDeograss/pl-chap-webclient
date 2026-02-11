"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    LayoutDashboard,
    TriangleAlert,
    Users,
    ChartBar,
    Settings,
    HelpCircle,
    Megaphone,
    ShieldAlert
} from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/ThemeToggle"

const navigation = [
    { name: "Live Dispatch", href: "/dashboard", icon: LayoutDashboard },
    { name: "Active Incidents", href: "/dashboard/incidents", icon: TriangleAlert, count: 12 },
    { name: "Personnel Management", href: "/dashboard/personnel", icon: Users },
    { name: "Performance Reports", href: "/dashboard/reports", icon: ChartBar },
]

const systemNavigation = [
    { name: "Regional Settings", href: "/settings", icon: Settings },
    { name: "Platform Support", href: "/support", icon: HelpCircle },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="w-64 flex flex-col bg-white dark:bg-[#111722] border-r border-slate-200 dark:border-slate-800 shrink-0 h-full">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                    <div className="bg-primary p-2 rounded-lg text-white">
                        <ShieldAlert className="h-6 w-6" />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">Police Chap Chap</h1>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Command Center</p>
                    </div>
                </div>
            </div>

            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 mb-2 px-3 uppercase tracking-widest">General</div>
                {navigation.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                                isActive
                                    ? "bg-primary/10 text-primary"
                                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                            )}
                        >
                            <item.icon className={cn("h-5 w-5", isActive ? "text-primary" : "text-slate-400 dark:text-slate-500")} />
                            <span className="font-medium">{item.name}</span>
                            {item.count && (
                                <span className="ml-auto bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                                    {item.count}
                                </span>
                            )}
                        </Link>
                    )
                })}

                <div className="pt-6">
                    <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 mb-2 px-3 uppercase tracking-widest">System</div>
                    {systemNavigation.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                                    isActive
                                        ? "bg-primary/10 text-primary"
                                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                                )}
                            >
                                <item.icon className={cn("h-5 w-5", isActive ? "text-primary" : "text-slate-400 dark:text-slate-500")} />
                                <span className="font-medium">{item.name}</span>
                            </Link>
                        )
                    })}
                </div>
            </nav>

            <div className="p-4 border-t border-slate-200 dark:border-slate-800">
                <button className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg">
                    <Megaphone className="h-4 w-4" />
                    New Broadcast
                </button>
                <div className="mt-4 flex items-center justify-between px-2">
                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">Appearance</span>
                    <ThemeToggle />
                </div>
            </div>
        </aside>
    )
}
