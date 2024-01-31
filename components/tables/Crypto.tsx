"use client"

import { CryptocurrencyMarket } from "react-tradingview-embed"

const CryptoTable = () => {
    return (
        <section className="w-full bg-slate-100 mt-16">
            <CryptocurrencyMarket widgetProps={{ colorTheme: 'Light', width: "100%" }} />
        </section>
    )
}

export default CryptoTable