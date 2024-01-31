import React from 'react'
import Link from 'next/link'
import TestimonialSlider from '@/components/TestimonialSlider'
import Navbar from '@/components/Navbar'
import AboutUs from '@/components/AboutUs'
import WhyChooseUs from '@/components/WhyChooseUs'
import HowItWorks from '@/components/HowItWorks'
import FAQS from '@/components/FAQS'
import Testimony from '@/components/Testimony'
import Footer from '@/components/Footer'
import Banner from '@/components/Banner'

const About = () => {
    return (
        <main className='overflow-x-hidden'>
            <Navbar />
            <Banner photo='https://images.pexels.com/photos/6340647/pexels-photo-6340647.jpeg?auto=compress&cs=tinysrgb&w=800' title='Who are we?' active='About' />
            <AboutUs />
            <WhyChooseUs />
            <HowItWorks />
            <FAQS />
            <Testimony />
            <Footer />
        </main>
    )
}

export default About