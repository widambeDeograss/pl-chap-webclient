"use client"

import { ShieldAlert, Timer, CarFront, Users } from "lucide-react"

const kpis = [
    {
        name: "Total Incidents",
        value: "1,240",
        change: "-4.1%",
        changeType: "positive", // Less crime is positive
        trend: "vs last month",
        icon: ShieldAlert,
        color: "text-red-500",
        bgColor: "bg-red-500/10",
    },
    {
        name: "Avg Response Time",
        value: "8.4 min",
        change: "-1.2m",
        changeType: "positive", // Faster is positive
        trend: "vs target (10m)",
        icon: Timer,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
    },
    {
        name: "Active Patrol Units",
        value: "86",
        change: "+12",
        changeType: "positive",
        trend: "shifts engaged",
        icon: CarFront,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
    },
    {
        name: "Community Reports",
        value: "342",
        change: "+18%",
        changeType: "neutral",
        trend: "engagement up",
        icon: Users,
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
    },
]

export function KPIGrid() {
    return (
        <div className="absolute bottom-8 left-8 right-8 z-10 pointer-events-none">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pointer-events-auto">
                {kpis.map((kpi, index) => (
                    <div
                        key={index}
                        className="bg-white/95 dark:bg-[#111722]/95 backdrop-blur-md p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xl transition-all hover:scale-[1.02]"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                                    {kpi.name}
                                </p>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                                    {kpi.value}
                                </h3>
                            </div>
                            <div className={`p-1.5 rounded-lg flex items-center gap-1 ${kpi.bgColor} ${kpi.color}`}>
                                {kpi.icon && <kpi.icon className="h-3.5 w-3.5" />}
                                <span className="text-[10px] font-bold">{kpi.change}</span>
                            </div>
                        </div>
                        <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                            {kpi.trend}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
