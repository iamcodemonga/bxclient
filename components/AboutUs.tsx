"use client"

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const AboutUs = () => {

    const container = useRef(null);
    const isInView = useInView(container, { once: true })
    const controls = useAnimation()

    useEffect(() => {
      console.log(isInView)
      if (isInView) {
        controls.start("on")
        controls.start("anime")
      }
    }, [isInView])
    

    return (
        <section className='w-full pt-16 lg:pt-36 pb-16 px-5 lg:px-20 relative whitebgimg'>
          {/* <img src="/graywave.svg" alt="graywave" className='w-full absolute' /> */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='absolute w-full -bottom-2 left-0 -z-10 hidde'>
            <path fill="#F3F4F6" fill-opacity="1" d="M0,192L1440,32L1440,320L0,320Z"></path>
          </svg> */}
          <div className="lg:grid grid-cols-12 gap-x-16 space-y-16 lg:space-y-0" ref={container}>
            <motion.div className="col-span-12 lg:col-span-6" variants={{ off: {opacity: 0, x: -200}, on: { opacity: 1, x: 0 } }} initial="off" animate={controls} transition={{ duration: 1 }} >
              <img src="https://images.pexels.com/photos/7433879/pexels-photo-7433879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='w-full rounded-xl' alt="about_pix" />
            </motion.div>
            <motion.div className="col-span-12 lg:col-span-6 space-y-8" variants={{ init: {opacity: 0, x: 200}, anime: { opacity: 1, x: 0 } }} initial="init" animate={controls} transition={{ duration: 1 }}>
              <h2 className="text-center lg:text-start text-5xl lg:text-7xl font-bold">About <span className='text-accent'>Us</span></h2>
              <p className="text-base text-secondary/50">We are a leading international financial company engaged in cryptocurrencies and real-estate investment activities, which are related to trading on financial markets and cryptocurrency exchanges performed by qualified professional traders.</p>
              <p className="text-base text-secondary/50">Our goal is to provide our investors with a reliable source of high income, while minimizing any possible risks and offering a high-quality service, allowing us to automate and simplify the relations between the investors and the trustees. We work towards increasing your profit margin by profitable investment. We look forward to you being part of our community.</p>
            </motion.div>
          </div>
        </section>
    )
}

export default AboutUs