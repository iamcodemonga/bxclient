"use client"

import { CryptocurrencyMarket } from "react-tradingview-embed"

const CryptoMarket = () => {
    return (
        <div className="lg:px-28 space-y-5">
            <h2 className="text-3xl lg:text-5xl font-bold">Cryptocurrency market</h2>
            <div className="w-full bg-slate-100">
                <CryptocurrencyMarket widgetProps={{ colorTheme: 'Light', width: "100%" }} />
            </div>
        </div>
    )
}

export default CryptoMarket