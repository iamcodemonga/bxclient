"use client"

import { ForexHeatMap } from "react-tradingview-embed"

const HeatMap = () => {
    return (
        <div className="lg:px-28 space-y-5">
            <h2 className="text-3xl lg:text-5xl font-bold">Forex Heatmap</h2>
            <div className="w-full">
                <ForexHeatMap widgetProps={{ width: "100%" }} />
            </div>
        </div>
    )
}

export default HeatMap