"use client"

function PersonnelHeader() {
    return (
        <header className="sticky top-0 z-10 bg-white/95 dark:bg-[#111722]/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 px-6 lg:px-20 py-3 shrink-0">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-3">
                        <div className="bg-primary p-1.5 rounded-lg text-white">
                            <span className="material-symbols-outlined block">shield</span>
                        </div>
                        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Police Chap Chap</h2>
                    </div>

                    <div className="hidden md:flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-1.5 border border-transparent focus-within:border-primary/50 transition-all">
                        <span className="material-symbols-outlined text-slate-400 text-xl">search</span>
                        <input className="bg-transparent border-none focus:ring-0 text-sm w-64 placeholder:text-slate-500 text-slate-900 dark:text-white" placeholder="Search officers..." type="text" />
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <button className="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all">
                        <span className="material-symbols-outlined text-lg">person_add</span>
                        <span className="hidden sm:inline">Register New Officer</span>
                    </button>
                    <div className="size-9 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border-2 border-primary/20">
                        <img className="w-full h-full object-cover" alt="Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2GDgzzkCE-4M57R-MsL6pt_oqRGSgDxrd_fFLwfEGgMFh2DqRvh1oc5JprYlUxSKy_o3TdEkxhLC0eUJan_lBOBoePfhztyKJOzMATE6LiJiM20i-Er6kbjGI_k7DmAFbqK84gy4O180VV4S7E1yQrllvwMYmOxZ7qTkyVt2h45_IYwtgsV_bI6OWnY5xV4b594Q6sgDiV8WU3vrVEJmimDSrGzYf5betGAhw9lq2OAPD5yFFJwMeZ_NpssS4IXCtISc9pcMh0DA" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default function PersonnelPage() {
    const officers = [
        {
            name: "Sgt. Fatuma Juma",
            badge: "TZ-6640",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7HwNCAPwZ4sSEzZQ5OGSDJpeqRlZOyO1LBFDdrrt25RTMFWS1RA3Velic5xxKtHldPSZkWN2hGs-wp-z7OWoRfG5IvwFefqIw8zAzjyhgRtjF0Xri68DafQfq2H5XxtoHw3xRrnICj7JwAVLX08y1H6uB2jsB4oq_IUgDFm1KcCLq4Hi6MOTCeeqWEevgeie1jPfa-A9IkO-8hJhHW_XeYMsGzN8Wtm4U6Hc5FSHQceGz3aSNnwbUWGu6Ea3tAV4J72p6S_xm2uM-MyKmUA2L3cD6ZLmRc-vrvIyD9KB96M",
            status: "Active Duty",
            statusColor: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
            location: "-6.7924, 39.2083",
            battery: "84%",
            recent: "Patrol at Mbezi Beach",
            time: "12m ago"
        },
        {
            name: "Cpl. John Mwangi",
            badge: "TZ-9901",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQrTagGBkuZHN--AFtSAN77payvZwmnumbHD6PZcmjb6XAi4KXt4qJ6aRHGPTQJzQ8BhM5C65YF9FBymIwWS4F32DQc7eQ6TO4wMKRdLoHCZbXO-jW4aF6XrwkWbT63YAhCGOFRQFmPTORvUW40Mqf2n15GmeWYs4TEpjCtm4xBJy9IUphg7lxngkko-rMudZottpaoWJBgE1t2HQjkVP56DGlLIYoAO0PmM57NJS-tQorJGMf7MqYz_eCqU3oiYGz58yITI_1dxQ",
            status: "En Route",
            statusColor: "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
            location: "-6.8235, 39.2695",
            battery: "52%",
            recent: "Responding to Incident #482",
            time: "5m ago"
        },
        {
            name: "Officer Daudi Mushi",
            badge: "TZ-7731",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5SWrMwhmXt9VCH3NaQqnxA9UkC3XS1dYN0PTucT0oI7CRYmCD-EpreLgydiI9ht3sAGqSpF2lrIN6gA8sYPVogRuVXk6ztIlzM9LF6D9b6GeYFxB_TkvtfePEE6F0Iekg2E9VNn4PsbXC6WAABirDhDlvHgpmm4LyfpC8yZFJtt6sA5FWoWCIhjNbGzN8Wtm4U6Hc5FSHQceGz3aSNnwbUWGu6Ea3tAV4J72p6S_xm2uM-MyKmUA2L3cD6ZLmRc-vrvIyD9KB96M",
            status: "Offline",
            statusColor: "bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400",
            location: "-6.8049, 39.2478",
            battery: "12%",
            recent: "Shift ended at Oysterbay Station",
            time: "2h ago"
        },
        {
            name: "Sgt. Sarah Kimaro",
            badge: "TZ-8822",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBU25Z4LvfnSdw5URNw9UMA4tO25WeFU-mrn-KY7XXQopy1WXZwh1QkmfPxAElZjaFmPwe09tfgXB5pL6nMxJseWy4258FBGHWkCnPIFHTdXZrEYD_Yw_SA50-16ob27C55jlT6JncrOnpHSluccf8OWZ_wX0XSx5dkDN_cudO0glLAWv96WdcAtq0ODQEcF11zePfZZmzyn6E831EIUTQXdSZZqeznTtREg9KOKzOfHn3quY9dvAdpzY7x18-FRXZK_7emj_yCsts",
            status: "Active Duty",
            statusColor: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
            location: "-6.7785, 39.2391",
            battery: "92%",
            recent: "Patrol route optimized",
            time: "1h ago"
        },
    ];

    return (
        <main className="flex-1 flex flex-col min-w-0">
            <PersonnelHeader />

            <div className="flex-1 overflow-y-auto px-6 lg:px-20 py-8 custom-scrollbar">
                {/* Page Title */}
                <div className="mb-8">
                    <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">
                        <span className="hover:text-primary">Admin Dashboard</span>
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                        <span className="text-slate-900 dark:text-slate-200">Officer Tracking</span>
                    </nav>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Officer Directory</h1>
                            <p className="text-slate-500 dark:text-slate-400 mt-1">Real-time monitoring of 1,284 registered personnel across the city.</p>
                        </div>
                        <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                            <button className="px-4 py-2 rounded-lg bg-white dark:bg-slate-700 shadow-sm text-sm font-semibold text-primary">Grid View</button>
                            <button className="px-4 py-2 rounded-lg text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">List View</button>
                        </div>
                    </div>
                </div>

                {/* Filters Bar */}
                <div className="flex flex-wrap items-center gap-3 mb-8">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:border-primary transition-colors text-slate-700 dark:text-slate-300">
                        <span className="material-symbols-outlined text-lg text-slate-400">filter_list</span>
                        Filter
                    </button>
                    <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-1"></div>
                    <button className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wide">All Officers</button>
                    <button className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 text-xs font-bold uppercase tracking-wide hover:border-slate-400 transition-colors flex items-center gap-2">
                        <span className="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Active Now (412)
                    </button>
                </div>

                {/* Officers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                    {officers.map((officer, i) => (
                        <div key={i} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                            <div className="p-5">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="relative">
                                            <div className="size-14 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 dark:border-slate-600">
                                                <img className="w-full h-full object-cover" alt="Officer" src={officer.image} />
                                            </div>
                                            <span className="absolute -bottom-1 -right-1 size-4 bg-emerald-500 border-2 border-white dark:border-slate-800 rounded-full"></span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors text-slate-900 dark:text-white">{officer.name}</h3>
                                            <div className="flex items-center gap-1.5 mt-0.5">
                                                <span className="text-xs font-bold text-slate-400 uppercase">Badge #{officer.badge}</span>
                                                <span className="material-symbols-outlined text-primary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="text-slate-400 hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center justify-between text-xs bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-700">
                                        <div className="flex flex-col">
                                            <span className="text-slate-500 uppercase font-bold tracking-tighter">Current Location</span>
                                            <span className="font-mono text-slate-700 dark:text-slate-300">{officer.location}</span>
                                        </div>
                                        <button className="text-primary font-bold flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">map</span>
                                            View
                                        </button>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Recent Activity</p>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-xs">
                                                <span className="size-1.5 rounded-full bg-primary"></span>
                                                <span className="text-slate-600 dark:text-slate-400">{officer.recent}</span>
                                                <span className="ml-auto text-slate-400 font-medium">{officer.time}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-5 py-3 bg-slate-50 dark:bg-slate-900/30 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm text-slate-400">battery_horiz_075</span>
                                    <span className="text-xs font-bold text-slate-500">{officer.battery}</span>
                                </div>
                                <span className={`px-2.5 py-1 rounded text-[10px] font-black uppercase tracking-widest ${officer.statusColor}`}>
                                    {officer.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-4 flex justify-center pb-8">
                    <div className="flex items-center gap-2">
                        <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                        <button className="size-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/20">1</button>
                        <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">2</button>
                        <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}
