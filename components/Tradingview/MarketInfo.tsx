"use client"

import { MarketData, Timeline } from "react-tradingview-embed"

const MarketInfo = () => {
    return (
        <div className="lg:px-28 space-y-5 lg:hidden">
            <h2 className="text-3xl lg:text-5xl font-bold">Market News</h2>
            <div className="w-full">
                <div className="lg:flex items-center space-x-0 lg:space-x-5 space-y-20 lg:space-y-0">
                    <MarketData widgetProps={{ colorTheme: "Light", width: "100%" }} />
                    <Timeline widgetProps={{ height: 450, width: "100%" }} />
                </div>
            </div>
        </div>
    )
}

export default MarketInfo