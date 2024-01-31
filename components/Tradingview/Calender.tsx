"use client"

import { EconomicCalendar } from "react-tradingview-embed"

const Calender = () => {
    return (
        <div className="lg:px-28 space-y-5">
            <h2 className="text-3xl lg:text-5xl font-bold">Economic calender</h2>
            <div className="w-full bg-slate-100">
                <EconomicCalendar widgetProps={{ width: "100%" }} />
            </div>
        </div>
    )
}

export default Calender