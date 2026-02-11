"use client"

import { Phone, MessageSquare, Map as MapIcon } from "lucide-react"

const officers = [
    {
        name: "Officer Juma Hamisi",
        id: "P-402",
        area: "Central",
        status: "Active Patrol",
        statusColor: "text-green-600 dark:text-green-500 bg-green-100 dark:bg-green-500/10",
        dotColor: "bg-green-500",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdLHGsvxNQdp1b_WkzbHfZ_9kOB_8r-neeMoySyv83F-MJMZiE-o1hh858zMg8RTSdnKwmwzzf3vPxO-6N86C7Zes8px2ONd1pMbJlzAYZqevMSkB6HRkatGOvLsvhDIUQpLG8XoweRREU4LRp3wmR6_sY8nBwZF19bHj2RaIBGuqffLh1D2udjEO0rxtrRkpCeOMIN_FgDqFfVd9cWc0FKLsClddUVmn3g_NxPnJAAB8nMmysRgFQAcfzm94euxHmkdzArEW2OfE",
        isEnRoute: false
    },
    {
        name: "Officer Sarah Abeid",
        id: "P-109",
        area: "Mwananyamala",
        status: "En-Route",
        statusColor: "text-primary bg-primary/10",
        dotColor: "bg-primary",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIKnWX0MxogPW-ENi2pSShxNX2duEQasOnmihPzt4odzm5Xjidn_oMP5iX280lEQTik7x6a2ISdPmVfLBDRH-XlSDj5EscP6ManrJzGdwsr-UadOL_I-WfAa2kGNrUDME8rmG2K5hB1WB51lyCyDCza2X7VpJEOHJnZtVVBu9J4hdw3t8hmyqGxU0uHUdL5EKREw0eatigvnpcMBYrHc_ay_auSju6YrizXYyOREt1VJxqzcAncXUrOcsWbW3l_D43syj9XTZU--k",
        isEnRoute: true,
        eta: "3 mins",
        incidentId: "124"
    },
    {
        name: "Officer David Kimaro",
        id: "P-221",
        area: "Oysterbay",
        status: "Standby",
        statusColor: "text-yellow-600 dark:text-yellow-500 bg-yellow-100 dark:bg-yellow-500/10",
        dotColor: "bg-yellow-500",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjGlH4lk2drThw3crBSduc4wV_TMqMzZia6a9gONmb1ynlKgbjrfYYEi4Bv1wmOj1P9qhjrKODfwaugin63Lr8BWY6MolA7VfvMkqEEeRK4oX4MkxHSZn_00FC_0yikSWqtQcbl_PsHY0LU1KRmFRq9ajzTQvuLMuLNhQOAmYG6_MCaWdqzhG6WGNunyPyhBoN0bZPUvS3N260CdwaIWmRgJtbWqJd47hLevdfH_BQ06AuO70q4giHT3fhacyNSEDhsKwNIAwV1q8",
        isEnRoute: false
    },
    {
        name: "Officer Elias Peter",
        id: "P-334",
        area: "Kariakoo",
        status: "Active Patrol",
        statusColor: "text-green-600 dark:text-green-500 bg-green-100 dark:bg-green-500/10",
        dotColor: "bg-green-500",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8gOSNE430UAVA966Kn8GeWpux726_pseiTigWe4Wj9T5m9PnC9VrNkUm-AuET4Vh9dVd63tUMc-Hycko2_Zhef8IsqEU4JoPRx5oEq27tdPwRJLSwoJAXTSFLONrKavA2Dt8TCml8PcIhmSN9w_tLAF1P8ylDdFfi3otbjDlVimfq-70OsSwha4tSMPAENJwsBGrfQoRvOXMpOixIxtxf9snjhuEiiUuo98yDBjn8KplF65ARO28rBKI68T0RCfSpMSKz_mNQz-Y",
        isEnRoute: false
    }
]

export function RightSidebar() {
    return (
        <aside className="w-80 flex flex-col bg-white dark:bg-[#111722] border-l border-slate-200 dark:border-slate-800 shrink-0 h-full border-t border-slate-200 lg:border-t-0">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                <h2 className="text-lg font-bold mb-1 text-slate-900 dark:text-white">Personnel Tracking</h2>
                <p className="text-xs text-slate-500 font-medium dark:text-slate-400">Monitoring 14 Active Units in Sector A</p>
            </div>

            <div className="flex p-2 gap-1 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                <button className="flex-1 py-1.5 text-xs font-bold rounded-md bg-white dark:bg-[#111722] shadow-sm text-primary transition-all ring-1 ring-slate-200 dark:ring-slate-700">On-Duty</button>
                <button className="flex-1 py-1.5 text-xs font-bold rounded-md text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">En-Route</button>
                <button className="flex-1 py-1.5 text-xs font-bold rounded-md text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">Standby</button>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar">
                {officers.map((officer) => (
                    <div
                        key={officer.id}
                        className={`p-4 border-b border-slate-100 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer group ${officer.isEnRoute ? 'bg-primary/5' : ''}`}
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="relative">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    className="h-10 w-10 rounded-full object-cover ring-2 ring-white dark:ring-slate-800"
                                    alt={`${officer.name} Profile`}
                                    src={officer.image}
                                />
                                <div className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 ${officer.dotColor} rounded-full border-2 border-white dark:border-[#111722]`}></div>
                            </div>
                            <div>
                                <p className="text-sm font-bold group-hover:text-primary transition-colors text-slate-900 dark:text-white">{officer.name}</p>
                                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Unit ID: {officer.id} • {officer.area}</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            {officer.isEnRoute ? (
                                <div className="flex flex-col">
                                    <span className={`text-[10px] font-bold ${officer.statusColor} px-2 py-0.5 rounded uppercase tracking-wider w-fit`}>
                                        {officer.status}
                                    </span>
                                    <span className="text-[10px] font-medium text-slate-400 mt-1">ETA: {officer.eta} (Incident {officer.incidentId})</span>
                                </div>
                            ) : (
                                <span className={`text-[10px] font-bold ${officer.statusColor} px-2 py-0.5 rounded uppercase tracking-wider`}>
                                    {officer.status}
                                </span>
                            )}

                            <div className="flex gap-2">
                                {officer.isEnRoute ? (
                                    <button className="p-1.5 rounded-lg bg-primary text-white hover:bg-blue-600 transition-colors shadow-sm">
                                        <MapIcon className="h-4 w-4" />
                                    </button>
                                ) : (
                                    <>
                                        <button className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-primary dark:hover:text-primary transition-colors">
                                            <Phone className="h-4 w-4" />
                                        </button>
                                        <button className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-primary dark:hover:text-primary transition-colors">
                                            <MessageSquare className="h-4 w-4" />
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 shrink-0">
                <div className="flex items-center justify-between mb-3 px-1">
                    <span className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Station Alertness</span>
                    <span className="text-xs font-bold text-green-500">OPTIMAL</span>
                </div>
                <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.4)]"></div>
                </div>
            </div>
        </aside>
    )
}
