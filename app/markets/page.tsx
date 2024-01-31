import Banner from "@/components/Banner"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Calender from "@/components/Tradingview/Calender"
import CrossRates from "@/components/Tradingview/CrossRates"
import CryptoMarket from "@/components/Tradingview/CryptoMarket"
import HeatMap from "@/components/Tradingview/HeatMap"
import MarketInfo from "@/components/Tradingview/MarketInfo"
import MarketScreener from "@/components/Tradingview/MarketScreener"
import Link from "next/link"

const Markets = () => {
    return (
        <main className="overview-x-hidden">
            <Navbar />
            <Banner photo='https://images.pexels.com/photos/8353802/pexels-photo-8353802.jpeg?auto=compress&cs=tinysrgb&w=800' title='Market Analysis.' active='Markets' />
            <section className="w-full pt-16 lg:pt-36 pb-16 px-5 lg:px-20 relative whitebgimg space-y-20">
                <CryptoMarket />
                <Calender />
                <MarketInfo />
                <MarketScreener />
                <HeatMap />
                <CrossRates />
            </section>
            <Footer />
        </main>
    )
}

export default Markets