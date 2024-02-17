import React from 'react'
import Navbar from '@/components/Navbar'
import AboutUs from '@/components/AboutUs'
import WhyChooseUs from '@/components/WhyChooseUs'
import HowItWorks from '@/components/HowItWorks'
import FAQS from '@/components/FAQS'
import Testimony from '@/components/Testimony'
import Footer from '@/components/Footer'
import Banner from '@/components/Banner'

import { authOptions } from '../api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import TawkToChat from '@/components/TawkTo'

const About = async() => {
    let user: string | null = null;
    const session = await getServerSession(authOptions)
    console.log(session?.user)
    if (session?.user) {
      user = session.user.email as string;
    }

    return (
        <main className='overflow-x-hidden'>
            <Navbar user={user} />
            <Banner photo='https://images.pexels.com/photos/6340647/pexels-photo-6340647.jpeg?auto=compress&cs=tinysrgb&w=800' title='Who are we?' active='About' />
            <AboutUs />
            <WhyChooseUs />
            <HowItWorks />
            <FAQS />
            <Testimony />
            <TawkToChat />
            <Footer />
        </main>
    )
}

export default About