"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

// Use a simplified header for this page since the "War Room" design has its own
function WarRoomHeader() {
    return (
        <header className="h-16 flex items-center justify-between px-8 bg-white dark:bg-background-dark border-b border-slate-200 dark:border-border-dark shrink-0">
            <div className="flex items-center gap-4">
                <h1 className="text-xl font-bold tracking-tight">War Room <span className="text-slate-500 font-normal ml-2">Active Session (Dar Zone A)</span></h1>
                <div className="flex items-center gap-2 bg-red-500/10 text-red-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    <span className="size-2 bg-red-500 rounded-full animate-status-blink"></span>
                    Live
                </div>
            </div>
            <div className="flex items-center gap-6">
                <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                    <input className="bg-slate-100 dark:bg-surface-dark border-none rounded-lg pl-10 pr-4 py-2 text-sm w-64 md:w-80 focus:ring-2 focus:ring-primary text-slate-900 dark:text-white" placeholder="Search incidents, officers..." type="text" />
                </div>
                <button className="flex items-center gap-2 bg-primary hover:bg-blue-600 transition-colors text-white px-4 py-2 rounded-lg text-sm font-bold">
                    <span className="material-symbols-outlined text-[18px]">add</span>
                    New Incident
                </button>
            </div>
        </header>
    )
}

export default function IncidentsPage() {
    const [activeIncidentId, setActiveIncidentId] = useState("INC-8821")

    const incidents = [
        {
            id: "INC-8821",
            title: "Armed Robbery - Kariakoo Market",
            desc: "Suspects spotted near Aggrey St. Traders reporting commotion...",
            time: "2 mins ago",
            type: "critical",
            priority: "Critical",
            officers: 4,
        },
        {
            id: "INC-8824",
            title: "Collision - Morogoro Rd",
            desc: "Daladala collision at Ubungo interchange. Traffic blocked towards Kimara.",
            time: "14 mins ago",
            type: "warning",
            priority: "Warning",
            officers: 2,
        },
        {
            id: "INC-8825",
            title: "Public Disturbance",
            desc: "Noise complaint at Coco Beach. Patrol unit dispatched.",
            time: "45 mins ago",
            type: "standard-primary",
            priority: "Standard",
            officers: 1,
        },
        {
            id: "INC-8819",
            title: "Minor Vandalism",
            desc: "Graffiti reported on Posta house. Case closed.",
            time: "2 hours ago",
            type: "standard-slate",
            priority: "Resolved",
            officers: 0,
        }
    ]

    return (
        <main className="flex-1 flex flex-col min-w-0">
            <WarRoomHeader />

            <div className="flex-1 flex overflow-hidden">
                {/* Left Pane: Incident Feed */}
                <section className="w-[420px] border-r border-slate-200 dark:border-border-dark flex flex-col bg-slate-50 dark:bg-[#0d121b] shrink-0">
                    <div className="p-4 border-b border-slate-200 dark:border-border-dark flex justify-between items-center">
                        <span className="text-xs font-bold uppercase text-slate-500">Incident Feed (12)</span>
                        <div className="flex gap-2">
                            <button className="p-1 text-slate-400 hover:text-primary dark:hover:text-white"><span className="material-symbols-outlined text-[20px]">filter_list</span></button>
                            <button className="p-1 text-slate-400 hover:text-primary dark:hover:text-white"><span className="material-symbols-outlined text-[20px]">sort</span></button>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto custom-scrollbar p-4 flex flex-col gap-3">
                        {incidents.map((incident) => (
                            <div
                                key={incident.id}
                                onClick={() => setActiveIncidentId(incident.id)}
                                className={cn(
                                    "bg-white dark:bg-surface-dark p-4 rounded-lg cursor-pointer transition-all hover:bg-slate-100 dark:hover:bg-slate-800",
                                    incident.type === "critical" && "critical-glow scale-[1.02]",
                                    incident.type === "warning" && "warning-glow",
                                    incident.type === "standard-primary" && "border-l-4 border-primary opacity-80 hover:opacity-100",
                                    incident.type === "standard-slate" && "border-l-4 border-slate-600 opacity-60 hover:opacity-100",
                                    activeIncidentId === incident.id && "ring-2 ring-primary ring-offset-2 ring-offset-slate-50 dark:ring-offset-background-dark"
                                )}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-[10px] font-mono text-slate-400 max-w-[80px] truncate">#{incident.id}</span>
                                    <span className={cn(
                                        "text-[10px] px-2 py-0.5 rounded font-bold uppercase",
                                        incident.type === "critical" && "bg-red-500/20 text-red-500",
                                        incident.type === "warning" && "bg-yellow-500/20 text-yellow-500",
                                        incident.type === "standard-primary" && "bg-primary/20 text-primary",
                                        incident.type === "standard-slate" && "bg-slate-500/20 text-slate-400"
                                    )}>{incident.priority}</span>
                                </div>
                                <h3 className="font-bold text-sm mb-1 text-slate-900 dark:text-white">{incident.title}</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{incident.desc}</p>
                                <div className="mt-3 flex justify-between items-center">
                                    {incident.officers > 0 ? (
                                        <div className="flex -space-x-2">
                                            {Array.from({ length: incident.officers }).map((_, i) => (
                                                <div key={i} className="size-6 rounded-full border-2 border-slate-50 dark:border-surface-dark bg-slate-600"></div>
                                            ))}
                                        </div>
                                    ) : <div></div>}
                                    <span className="text-[10px] text-slate-500">{incident.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Right Pane: Incident Details */}
                <section className="flex-1 overflow-y-auto custom-scrollbar bg-white dark:bg-background-dark">
                    {/* Incident Header */}
                    <div className="p-8 border-b border-slate-200 dark:border-border-dark">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-sm font-mono text-primary">#INC-8821</span>
                                    <span className="bg-red-500/20 text-red-500 text-xs px-2 py-1 rounded font-bold uppercase">High Priority</span>
                                    <span className="flex items-center gap-1 text-green-500 text-[10px] font-bold px-2 py-1 rounded bg-green-500/10 border border-green-500/30">
                                        <span className="material-symbols-outlined text-[12px]">verified_user</span>
                                        ENCRYPTED VERIFICATION
                                    </span>
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Armed Robbery - Kariakoo</h2>
                                <p className="text-slate-500 dark:text-slate-400 mt-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                                    Aggrey Street, Kariakoo, Ilala District • -6.8198° S, 39.2736° E
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <button className="bg-slate-100 dark:bg-surface-dark p-2 rounded-lg hover:text-primary transition-colors text-slate-600 dark:text-slate-400">
                                    <span className="material-symbols-outlined">share</span>
                                </button>
                                <button className="bg-slate-100 dark:bg-surface-dark p-2 rounded-lg hover:text-primary transition-colors text-slate-600 dark:text-slate-400">
                                    <span className="material-symbols-outlined">print</span>
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="bg-slate-50 dark:bg-surface-dark p-4 rounded-xl border border-slate-200 dark:border-border-dark">
                                <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">Reporter</span>
                                <div className="flex items-center gap-2">
                                    <div className="size-8 rounded-full bg-slate-700"></div>
                                    <span className="text-sm font-semibold text-slate-900 dark:text-white">Juma Hassan</span>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-surface-dark p-4 rounded-xl border border-slate-200 dark:border-border-dark">
                                <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">Verification Status</span>
                                <div className="flex items-center gap-2 text-green-500">
                                    <span className="material-symbols-outlined text-[18px]">lock</span>
                                    <span className="text-sm font-semibold">Secure Hash Match</span>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-surface-dark p-4 rounded-xl border border-slate-200 dark:border-border-dark">
                                <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">ETA Backup</span>
                                <div className="flex items-center gap-2 text-primary">
                                    <span className="material-symbols-outlined text-[18px]">timer</span>
                                    <span className="text-sm font-semibold">4m 20s</span>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-surface-dark p-4 rounded-xl border border-slate-200 dark:border-border-dark">
                                <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">Dispatch Code</span>
                                <span className="text-sm font-mono font-bold text-slate-900 dark:text-white">10-31 CRIME</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left Column: Media & Info */}
                        <div className="lg:col-span-8 flex flex-col gap-8">
                            {/* Media Gallery */}
                            <div>
                                <h4 className="text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
                                    <span className="material-symbols-outlined text-[20px] text-primary">perm_media</span>
                                    Evidence & Media
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div className="aspect-square bg-slate-100 dark:bg-surface-dark rounded-xl overflow-hidden relative group">
                                        <img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="CCTV" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5FJ1SJJL6DyjPs0-3VXzMEWKJrWALOCpky6dVAHWDvB8tOI-pgbDIEmiz_2TpH-ObLlj9E5m-MP1IdrFYQ8sC_k1YRLt4CxfyAkvwbhMr5IldOCITsMVT2CKJwPkCfJtKkNMxK2NxxJgZEEmEe_4bKthqjz7cDdA_bUFUPAMl3-nFROCQdHUElRC3asGKj1C_LcxDgt_khtq1wh2JXGH70xkM7_glPAkoOOW63h0S0-4ClLgqU9BrU70_NhomALuROEAJ_B9eBzo" />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                                            <span className="material-symbols-outlined text-white text-3xl">zoom_in</span>
                                        </div>
                                    </div>
                                    <div className="aspect-square bg-slate-100 dark:bg-surface-dark rounded-xl overflow-hidden relative group">
                                        <img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Witness" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv1z0JDpbE0BLPjrO6xKwcLvj9AlRE-llhT1JUKsdIpw7kSIFsUyBksctP8qHYj4Oora80qEScwlkJiWAdW4ngKsTFpE_8zobzspbZ5vhCVNcJHwfbuEbdyEZ3kbY8P920sWrwRhgpZ2vJtHgJkZEd18HbSW_nR2g1Oeyy4ZSJ6FjfDTnQairrPBcZpqJUyRiMYfXI9rOWTEg1-jkpNep4FCjzO1mAwmqZu_Q2FS7ajL6h8m-lsar6TpfdLcX1cHnqnWvCGQx4dGY" />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                                            <span className="material-symbols-outlined text-white text-3xl">zoom_in</span>
                                        </div>
                                    </div>
                                    <div className="aspect-square bg-slate-100 dark:bg-surface-dark rounded-xl p-4 flex flex-col justify-between border border-slate-200 dark:border-border-dark/50">
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs font-bold text-slate-400">VOICE NOTE</span>
                                            <span className="text-[10px] text-slate-500">0:42</span>
                                        </div>
                                        <div className="flex items-center gap-1 h-12">
                                            <div className="flex-1 flex items-end gap-[2px] h-full">
                                                <div className="w-1 bg-primary/40 h-2"></div>
                                                <div className="w-1 bg-primary/60 h-4"></div>
                                                <div className="w-1 bg-primary h-8"></div>
                                                <div className="w-1 bg-primary h-5"></div>
                                                <div className="w-1 bg-primary/30 h-3"></div>
                                                <div className="w-1 bg-primary h-10"></div>
                                                <div className="w-1 bg-primary h-6"></div>
                                                <div className="w-1 bg-primary/60 h-4"></div>
                                                <div className="w-1 bg-primary/40 h-2"></div>
                                            </div>
                                        </div>
                                        <button className="w-full bg-primary/20 text-primary py-2 rounded-lg flex items-center justify-center gap-2 text-xs font-bold hover:bg-primary hover:text-white transition-colors">
                                            <span className="material-symbols-outlined text-[18px]">play_arrow</span>
                                            Listen To Dispatch
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Live Map Preview */}
                            <div className="h-64 rounded-xl bg-slate-100 dark:bg-surface-dark relative overflow-hidden border border-slate-200 dark:border-border-dark">
                                <div className="absolute inset-0 opacity-40">
                                    <img
                                        className="w-full h-full object-cover dark:filter dark:invert dark:grayscale"
                                        alt="Map Grid"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBZhnAza442TtuUJJD5Yz9vZWkwshEndEujKIqYmgH76rpSNex16ISXeLM7k_EzeynETvUFFa0bC0F89oLWd3dM59DJFO8PO4U3ryg-I9lo6wpq3YHT_e_dqH_wOxDxi8QuP03PsVcem1MJbP_KcWaA0qvSYAhfdCtqdM-RHmheMsJwZVIS-G-rYKbbdR9uSsx_nX8Ys9u5N15gwuwaEYtiwCuHKpOiyppZvMR2HQpT8fMp5Zdls_CmhSbXwBnAlvorMDx8DWYQkM"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-background-light/80 dark:from-background-dark/80 to-transparent"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div className="size-12 bg-red-500/30 rounded-full flex items-center justify-center animate-ping"></div>
                                    <div className="size-4 bg-red-500 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white"></div>
                                </div>
                                <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md px-4 py-2 rounded-lg border border-slate-200 dark:border-border-dark">
                                    <p className="text-xs font-bold mb-1 text-slate-900 dark:text-white">Live Tracking: Patrol Unit K04</p>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] text-green-500 flex items-center gap-1">
                                            <span className="size-2 bg-green-500 rounded-full"></span>
                                            Active
                                        </span>
                                        <span className="text-[10px] text-slate-400">Distance: 0.8 km</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Timeline & Sidebar */}
                        <div className="lg:col-span-4 flex flex-col gap-6">
                            <div className="bg-slate-50 dark:bg-surface-dark/50 rounded-xl border border-slate-200 dark:border-border-dark p-6">
                                <h4 className="text-sm font-bold uppercase tracking-wider mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
                                    <span className="material-symbols-outlined text-[20px] text-primary">history</span>
                                    Incident Log
                                </h4>
                                <div className="flex flex-col gap-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-200 dark:before:bg-border-dark">
                                    <div className="flex gap-4 relative">
                                        <div className="size-6 rounded-full bg-primary flex items-center justify-center z-10 shrink-0">
                                            <span className="material-symbols-outlined text-[14px] text-white">emergency</span>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-slate-900 dark:text-white">Incident Reported</p>
                                            <p className="text-[10px] text-slate-500">14:20:05 via App</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 relative">
                                        <div className="size-6 rounded-full bg-slate-300 dark:bg-slate-700 flex items-center justify-center z-10 border border-slate-100 dark:border-border-dark shrink-0">
                                            <span className="material-symbols-outlined text-[14px] text-slate-600 dark:text-slate-400">notifications_active</span>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-slate-900 dark:text-white">Dispatch Notified</p>
                                            <p className="text-[10px] text-slate-500">14:20:12 System Auto</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 relative">
                                        <div className="size-6 rounded-full bg-slate-300 dark:bg-slate-700 flex items-center justify-center z-10 border border-slate-100 dark:border-border-dark shrink-0">
                                            <span className="material-symbols-outlined text-[14px] text-slate-600 dark:text-slate-400">local_police</span>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-slate-900 dark:text-white">Patrol Unit K04 En Route</p>
                                            <p className="text-[10px] text-slate-500">14:21:45 Sgt. Mwita</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 relative">
                                        <div className="size-6 rounded-full bg-slate-300 dark:bg-slate-700 flex items-center justify-center z-10 border border-slate-100 dark:border-border-dark animate-pulse shrink-0">
                                            <span className="material-symbols-outlined text-[14px] text-primary">edit</span>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-slate-900 dark:text-white">Reviewing Media Assets</p>
                                            <p className="text-[10px] text-slate-500">Current Action...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Encryption Details Card */}
                            <div className="bg-gradient-to-br from-white to-slate-50 dark:from-background-dark dark:to-[#1a2333] border border-primary/30 rounded-xl p-6 shadow-sm">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="material-symbols-outlined text-primary">verified</span>
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Integrity Hub</h4>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-[10px]">
                                        <span className="text-slate-500">Blockchain Block</span>
                                        <span className="font-mono text-slate-700 dark:text-slate-300">#7291-BA</span>
                                    </div>
                                    <div className="flex justify-between text-[10px]">
                                        <span className="text-slate-500">Hash ID</span>
                                        <span className="font-mono text-primary truncate ml-4 w-24 text-right">f2a89c...4e12</span>
                                    </div>
                                    <div className="pt-2 border-t border-slate-200 dark:border-border-dark">
                                        <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed italic">This incident data is digitally signed and encrypted at source to ensure chain of custody.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Global Action Bar */}
                    <footer className="h-20 bg-white dark:bg-background-dark border-t border-slate-200 dark:border-border-dark px-8 flex items-center justify-between shadow-lg shrink-0">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-surface-dark rounded-lg">
                                <span className="text-xs font-bold text-slate-500">STATUS:</span>
                                <select className="bg-transparent border-none text-xs font-bold focus:ring-0 p-0 pr-6 text-slate-700 dark:text-slate-300">
                                    <option>In Investigation</option>
                                    <option>Units Responding</option>
                                    <option>Resolved</option>
                                    <option>False Alarm</option>
                                </select>
                            </div>
                            <div className="h-8 w-[1px] bg-slate-200 dark:bg-border-dark"></div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-slate-400">chat</span>
                                <span className="text-xs text-slate-500 dark:text-slate-400">3 active officer comments</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button className="px-6 py-2 rounded-lg border border-slate-200 dark:border-border-dark font-bold text-sm hover:bg-slate-100 dark:hover:bg-surface-dark transition-colors text-slate-700 dark:text-slate-300">
                                Add Notes
                            </button>
                            <button className="px-6 py-2 rounded-lg bg-red-500/10 text-red-500 border border-red-500/30 font-bold text-sm hover:bg-red-500/20 transition-colors">
                                Escalate (S.W.A.T)
                            </button>
                            <button className="px-8 py-2 rounded-lg bg-primary text-white font-bold text-sm shadow-lg shadow-primary/20 hover:bg-blue-600 transition-colors">
                                Dispatch Support
                            </button>
                        </div>
                    </footer>
                </section>
            </div>
        </main>
    )
}
