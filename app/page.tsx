// import Image from 'next/image'
import AboutUs from '@/components/AboutUs'
import Calculator from '@/components/Calculator'
import FAQS from '@/components/FAQS'
import HowItWorks from '@/components/HowItWorks'
import Navbar from '@/components/Navbar'
import Packages from '@/components/Packages'
import Slider from '@/components/Slider'
import Testimony from '@/components/Testimony'
import BotexTickerTape from '@/components/Tradingview/BotexTickerTape'
import WhyChooseUs from '@/components/WhyChooseUs'
import Footer from '@/components/Footer'
import CurrencyData from '@/components/CurrencyData'
import SuccessPopup from '@/components/popups/Success'
import DepositPopup from '@/components/popups/Deposit'

export default function Home() {
  return (
      <main className='overflow-x-hidden'>
        <Navbar />
        <Slider />
        <BotexTickerTape />
        <AboutUs />
        <Packages />
        <WhyChooseUs />
        <Calculator />
        <HowItWorks />
        <FAQS />
        <CurrencyData />
        <Testimony />
        {/* <SuccessPopup /> */}
        {/* <DepositPopup /> */}
        <Footer />
      </main>
  )
}
