"use client"

import { Plus, Minus, Crosshair, Layers, AlertCircle, Video } from "lucide-react"

export function MapLayer() {
    return (
        <div className="flex-1 relative bg-slate-100 dark:bg-slate-950 overflow-hidden h-full">
            {/* Map Layer (Placeholder) */}
            <div
                className="absolute inset-0 grayscale contrast-125 dark:invert dark:opacity-40 transition-all duration-300"
                style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBtETAi24mVpabS-YLU1ByeEcLJP_8AsmA6GRpDk9hTOD0jnNMhZxB3EDX6m5abu7fOdwHuPuwkXksJBXVvsjg_rSKE-G1MmSuxiXRjE43huO0BbkJaXuqiyRso1aheQDDVt6p_uWHABLPQddBh6pkwIHLZjuCihyHcQpMojfv5GULnCtxYlaKDUxVXz2n63riawcgsq7_W5etr2kftrX5ayUkT8xFXgSqTJ5-a2l5lyXT_LwnopZODeJol3suZ0PeUS9HnP1Gxz9w')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            ></div>

            {/* Incident Markers */}
            <div className="absolute top-1/4 left-1/3 group cursor-pointer z-10">
                <div className="h-6 w-6 bg-red-500 rounded-full flex items-center justify-center pulse-red border-2 border-white shadow-lg">
                    <AlertCircle className="text-white h-3.5 w-3.5" strokeWidth={3} />
                </div>

                {/* Hover Card */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-900 shadow-xl rounded-lg p-3 w-48 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase text-red-500 bg-red-500/10 px-1.5 py-0.5 rounded">Critical</span>
                        <span className="text-[10px] text-slate-500 font-medium">2 mins ago</span>
                    </div>
                    <p className="text-sm font-bold mb-1 text-slate-900 dark:text-white">Bank Heist - Unit Area 12</p>
                    <p className="text-xs text-slate-500 mb-2">3 units responding</p>
                    <button className="w-full bg-primary text-white text-[10px] py-1.5 rounded-md font-bold flex items-center justify-center gap-1 hover:bg-blue-600 transition-colors">
                        <Video className="h-3 w-3" />
                        VIEW CAMERA FEED
                    </button>
                </div>
            </div>

            {/* Unit Markers */}
            <div className="absolute bottom-1/3 left-1/2 cursor-pointer z-10">
                <div className="h-4 w-4 bg-primary rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform"></div>
                <p className="text-[10px] mt-2 font-bold bg-white/80 dark:bg-slate-900/80 backdrop-blur px-2 py-0.5 rounded shadow text-center text-slate-900 dark:text-white">Unit P-201</p>
            </div>

            <div className="absolute top-2/3 right-1/4 cursor-pointer z-10">
                <div className="h-4 w-4 bg-green-500 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform"></div>
                <p className="text-[10px] mt-2 font-bold bg-white/80 dark:bg-slate-900/80 backdrop-blur px-2 py-0.5 rounded shadow text-center text-slate-900 dark:text-white">Patrol H-14</p>
            </div>

            {/* Map Controls */}
            <div className="absolute top-6 right-6 flex flex-col gap-2 z-10">
                <div className="bg-white dark:bg-[#111722] p-1 rounded-lg shadow-xl border border-slate-200 dark:border-slate-800">
                    <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md block text-slate-600 dark:text-slate-400">
                        <Plus className="h-5 w-5" />
                    </button>
                    <div className="h-px bg-slate-200 dark:bg-slate-800 mx-1"></div>
                    <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md block text-slate-600 dark:text-slate-400">
                        <Minus className="h-5 w-5" />
                    </button>
                </div>
                <button className="bg-white dark:bg-[#111722] p-2 rounded-lg shadow-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400">
                    <Crosshair className="h-5 w-5" />
                </button>
                <button className="bg-white dark:bg-[#111722] p-2 rounded-lg shadow-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400">
                    <Layers className="h-5 w-5" />
                </button>
            </div>
        </div>
    )
}
