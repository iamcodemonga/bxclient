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

import { authOptions } from './api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import TidioChat from '@/components/TidioChat'
// import TawkToChat from '@/components/TawkTo'

export default async function Home() {
  let user: string | null = null;
  const session = await getServerSession(authOptions)
  console.log(session?.user)
  if (session?.user) {
    user = session.user.email as string;
  }

  return (
      <main className='overflow-x-hidden'>
        <Navbar user={user} />
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
        <Footer />
        <TidioChat />
        {/* <TawkToChat /> */}
      </main>
  )
}
