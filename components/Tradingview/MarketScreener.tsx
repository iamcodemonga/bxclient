"use client"
import { Screener } from "react-tradingview-embed"

const MarketScreener = () => {
    return (
        <div className="lg:px-28 space-y-5">
            <h2 className="text-3xl lg:text-5xl font-bold">Forex Charts</h2>
            <div className="w-full">
                <Screener widgetProps={{ colorTheme: "Light", width: "100%" }} />
            </div>
        </div>
        
    )
}

export default MarketScreener