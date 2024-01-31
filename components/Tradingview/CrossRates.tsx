"use client"

import { ForexCrossRates } from "react-tradingview-embed"

const CrossRates = () => {
    return (
        <div className="lg:px-28 space-y-5">
            <h2 className="text-3xl lg:text-5xl font-bold">Forex Cross Rates</h2>
            <div className="w-full">
                <ForexCrossRates widgetProps={{ colorTheme: "Light", width: "100%" }} />
            </div>
        </div>
    )
}

export default CrossRates