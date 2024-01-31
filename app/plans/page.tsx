import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Packages from '@/components/Packages'
import Calculator from '@/components/Calculator'
import Footer from '@/components/Footer'
import HowItWorks from '@/components/HowItWorks'
import Banner from '@/components/Banner'

const Plans = () => {
    return (
        <main className='overflow-x-hidden'>
            <Navbar />
            <Banner photo='https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' title='Invest In Real Estate.' active='Plans' />
            <Packages />
            <Calculator />
            <HowItWorks />
            <Footer />
        </main>
    )
}

export default Plans