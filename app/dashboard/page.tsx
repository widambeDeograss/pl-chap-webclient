"use client"

import { Header } from "@/components/layout/Header"
import { RightSidebar } from "@/components/layout/RightSidebar"
import { MapLayer } from "@/components/dashboard/MapLayer"
import { KPIGrid } from "@/components/dashboard/KPIGrid"

export default function DashboardPage() {
    return (
        <>
            <main className="flex-1 flex flex-col relative min-w-0">
                <Header />
                <div className="flex-1 relative overflow-hidden">
                    <MapLayer />
                    <KPIGrid />
                </div>
            </main>
            <RightSidebar />
        </>
    )
}
