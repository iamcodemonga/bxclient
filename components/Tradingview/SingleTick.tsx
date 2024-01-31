"use client"

import { SingleTicker } from "react-tradingview-embed"

const SingleTick = ({ symbol }: { symbol: string }) => {
    return (
        <SingleTicker widgetProps={{ symbol, width: "100%", isTransparent: true, colorTheme: "Light" }} />
    )
}

export default SingleTick