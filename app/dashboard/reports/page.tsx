"use client"

function AnalyticsHeader() {
    return (
        <header className="h-16 border-b border-slate-200 dark:border-border-dark flex items-center justify-between px-8 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-10 shrink-0">
            <div className="flex items-center gap-4">
                <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Performance Analytics</h2>
                <div className="h-6 w-px bg-slate-200 dark:bg-border-dark"></div>
                <div className="flex items-center gap-2 px-3 py-1 bg-slate-100 dark:bg-surface-dark rounded-full">
                    <div className="size-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">System Live</span>
                </div>
            </div>
            <div className="flex items-center gap-6">
                <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
                    <input className="pl-10 pr-4 py-2 bg-slate-100 dark:bg-surface-dark border-none rounded-lg text-sm w-64 focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-slate-500 text-slate-900 dark:text-white" placeholder="Search data points..." type="text" />
                </div>
                <div className="flex items-center gap-3">
                    <button className="size-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-surface-dark text-slate-600 dark:text-slate-300 relative">
                        <span className="material-symbols-outlined">notifications</span>
                        <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-background-dark"></span>
                    </button>
                    <button className="size-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-surface-dark text-slate-600 dark:text-slate-300">
                        <span className="material-symbols-outlined">help</span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default function ReportsPage() {
    return (
        <main className="flex-1 flex flex-col min-w-0">
            <AnalyticsHeader />

            <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
                {/* Filter Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <button className="px-4 py-2 bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-lg text-sm font-medium flex items-center gap-2 text-slate-700 dark:text-slate-300">
                            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                            Last 30 Days
                            <span className="material-symbols-outlined text-[18px]">expand_more</span>
                        </button>
                        <button className="px-4 py-2 bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-lg text-sm font-medium flex items-center gap-2 text-slate-700 dark:text-slate-300">
                            <span className="material-symbols-outlined text-[18px]">location_on</span>
                            All Zones (Dar)
                            <span className="material-symbols-outlined text-[18px]">expand_more</span>
                        </button>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500 dark:text-slate-400 mr-2">Displaying: <span className="text-slate-900 dark:text-white font-semibold">Consolidated Region View</span></span>
                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-surface-dark rounded-lg transition-colors text-slate-600 dark:text-slate-400">
                            <span className="material-symbols-outlined">refresh</span>
                        </button>
                    </div>
                </div>

                {/* KPI Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white dark:bg-card-dark p-6 rounded-xl border border-slate-200 dark:border-border-dark shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-blue-100 dark:bg-primary/20 rounded-lg text-primary">
                                <span className="material-symbols-outlined">task_alt</span>
                            </div>
                            <span className="text-xs font-bold text-green-500 flex items-center bg-green-50 dark:bg-green-500/10 px-2 py-0.5 rounded-full">+2.5%</span>
                        </div>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Avg Resolution Rate</p>
                        <h3 className="text-3xl font-bold dark:text-white">84.2%</h3>
                        <div className="mt-4 w-full bg-slate-100 dark:bg-background-dark h-1.5 rounded-full overflow-hidden">
                            <div className="bg-primary h-full rounded-full" style={{ width: "84.2%" }}></div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-card-dark p-6 rounded-xl border border-slate-200 dark:border-border-dark shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-purple-100 dark:bg-purple-500/20 rounded-lg text-purple-600 dark:text-purple-400">
                                <span className="material-symbols-outlined">emergency_home</span>
                            </div>
                            <span className="text-xs font-bold text-red-500 flex items-center bg-red-50 dark:bg-red-500/10 px-2 py-0.5 rounded-full">-4.1%</span>
                        </div>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Total Incidents (MoM)</p>
                        <h3 className="text-3xl font-bold dark:text-white">1,240</h3>
                        <p className="text-[11px] text-slate-400 mt-2 font-medium">Against 1,293 last month</p>
                    </div>

                    <div className="bg-white dark:bg-card-dark p-6 rounded-xl border border-slate-200 dark:border-border-dark shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-amber-100 dark:bg-amber-500/20 rounded-lg text-amber-600 dark:text-amber-400">
                                <span className="material-symbols-outlined">timer</span>
                            </div>
                            <span className="text-xs font-bold text-green-500 flex items-center bg-green-50 dark:bg-green-500/10 px-2 py-0.5 rounded-full">-0.8m</span>
                        </div>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Avg Response Time</p>
                        <h3 className="text-3xl font-bold dark:text-white">5.4<span className="text-sm font-medium text-slate-400 ml-1">min</span></h3>
                        <p className="text-[11px] text-slate-400 mt-2 font-medium">Target response: 6.0 min</p>
                    </div>

                    <div className="bg-white dark:bg-card-dark p-6 rounded-xl border border-slate-200 dark:border-border-dark shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-green-100 dark:bg-green-500/20 rounded-lg text-green-600 dark:text-green-400">
                                <span className="material-symbols-outlined">person_pin</span>
                            </div>
                            <span className="text-xs font-bold text-green-500 flex items-center bg-green-50 dark:bg-green-500/10 px-2 py-0.5 rounded-full">+12%</span>
                        </div>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Active Field Officers</p>
                        <h3 className="text-3xl font-bold dark:text-white">156</h3>
                        <p className="text-[11px] text-slate-400 mt-2 font-medium">92% shift occupancy</p>
                    </div>
                </div>

                {/* Charts Row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Chart */}
                    <div className="lg:col-span-2 bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-border-dark shadow-sm flex flex-col">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h4 className="font-bold text-lg dark:text-white">Response Time Trends</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400">Dispatch-to-on-site minutes by day</p>
                            </div>
                            <div className="flex gap-4 text-xs font-semibold">
                                <div className="flex items-center gap-2 dark:text-white">
                                    <span className="size-2 rounded-full bg-primary"></span> Current
                                </div>
                                <div className="flex items-center gap-2 text-slate-400">
                                    <span className="size-2 rounded-full bg-slate-400/30"></span> Previous
                                </div>
                            </div>
                        </div>
                        <div className="relative flex-1 min-h-[250px] w-full mt-4">
                            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 250">
                                <defs>
                                    <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
                                        <stop offset="0%" stopColor="#135bec" stopOpacity="0.2"></stop>
                                        <stop offset="100%" stopColor="#135bec" stopOpacity="0"></stop>
                                    </linearGradient>
                                </defs>
                                <path d="M0,180 Q100,160 200,190 T400,120 T600,150 T800,80 T1000,100" fill="none" stroke="#135bec" strokeLinecap="round" strokeWidth="3"></path>
                                <path d="M0,180 Q100,160 200,190 T400,120 T600,150 T800,80 T1000,100 V250 H0 Z" fill="url(#areaGradient)"></path>
                                <circle cx="200" cy="190" fill="#135bec" r="4"></circle>
                                <circle cx="400" cy="120" fill="#135bec" r="4"></circle>
                                <circle cx="800" cy="80" fill="#135bec" r="4"></circle>
                            </svg>
                            <div className="absolute -bottom-6 left-0 right-0 flex justify-between px-2">
                                <span className="text-[10px] text-slate-400 font-bold">Mon</span>
                                <span className="text-[10px] text-slate-400 font-bold">Tue</span>
                                <span className="text-[10px] text-slate-400 font-bold">Wed</span>
                                <span className="text-[10px] text-slate-400 font-bold">Thu</span>
                                <span className="text-[10px] text-slate-400 font-bold">Fri</span>
                                <span className="text-[10px] text-slate-400 font-bold">Sat</span>
                                <span className="text-[10px] text-slate-400 font-bold">Sun</span>
                            </div>
                        </div>
                    </div>

                    {/* Incident Distribution Heatmap simulated */}
                    <div className="bg-white dark:bg-card-dark rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col">
                        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                            <h4 className="font-bold dark:text-white flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">distance</span>
                                Predictive Analysis
                            </h4>
                            <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full font-bold">LIVE</span>
                        </div>
                        <div className="flex-1 min-h-[300px] relative bg-slate-900 overflow-hidden">
                            <img
                                className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale contrast-125"
                                alt="Map"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_tkBWY8-I6i_Pd_msRTUh_dO8vnPMaGNKPK6PjYfzvtcf5BjSlaGX_j-IF5fqFGrmKA1Ex5jMda-xtsLIe6ZK4i7A_QfQIdfxWS4kSh4OK0aezt93XrDsuvZrPplOYeqs257oISFO0QRcFtoLV7Ix74DUMx_eSgN15DDIxIN39eV3rC52uKD0zRgGnHllyyCQfi_00cTGepI7z1vmYglx7M-fSxjc_jwmnSk1k2tm1MLGvHL_b3GxntCLen8d6Vh2pAgOz54kosI"
                            />
                            <div className="absolute top-1/4 left-1/3 size-32 heatmap-gradient rounded-full blur-2xl"></div>
                            <div className="absolute bottom-1/3 right-1/4 size-48 heatmap-gradient rounded-full blur-3xl opacity-60"></div>
                            <div className="absolute top-1/2 left-1/2 size-8 heatmap-hotspot rounded-full blur-xl animate-pulse"></div>
                            <div className="absolute bottom-4 left-4 p-3 bg-card-dark/80 backdrop-blur rounded-lg border border-slate-800">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Risk Intensity</p>
                                <div className="flex items-center gap-1 h-2 w-32 rounded-full bg-gradient-to-r from-primary to-orange-500"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Officer Leaderboard */}
                <div className="bg-white dark:bg-card-dark rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col">
                    <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                        <h4 className="font-bold dark:text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-amber-500">military_tech</span>
                            Officer Performance
                        </h4>
                    </div>
                    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/20 border border-slate-100 dark:border-slate-800 flex items-center gap-4">
                                <div className="relative">
                                    <div className="size-10 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                                    <div className="absolute -top-1 -right-1 size-5 bg-amber-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-white dark:border-card-dark">{i}</div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold dark:text-white">Badge #TZ-{8840 + i}</p>
                                    <p className="text-[10px] text-slate-500">9{8 - i}% Resolution Rate</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}
