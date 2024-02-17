"use client"

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const WhyChooseUs = () => {

    const legal = useRef(null);
    const trading = useRef(null);
    const risk = useRef(null);
    const rely = useRef(null);
    const refer = useRef(null);
    const support = useRef(null);
    const legalInView = useInView(legal, { once: true })
    const tradingInView = useInView(trading, { once: true })
    const riskInView = useInView(risk, { once: true })
    const relyInView = useInView(rely, { once: true })
    const referInView = useInView(refer, { once: true })
    const supportInView = useInView(support, { once: true })
    const controls = useAnimation()

    useEffect(() => {
        if (legalInView) {
          controls.start("playlegal")
        }
        if (tradingInView) {
          controls.start("playtrading")
        }
        if (riskInView) {
          controls.start("playrisk")
        }
        if (relyInView) {
          controls.start("playrely")
        }
        if (referInView) {
          controls.start("playrefer")
        }
        if (supportInView) {
          controls.start("playsupport")
        }
    }, [legalInView, tradingInView, riskInView, relyInView, referInView, supportInView])

    return (
        <section className="w-full pb-16  pt-16 lg:py-36 px-5 lg:px-20 bg-secondary blackbgimg relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='w-full absolute left-0 top-0 -mt-20 md:-mt-40 lg:-mt-56'>
            <path fill="#141C24" fill-opacity="1" d="M0,160L1440,224L1440,320L0,320Z"></path>
          </svg>
          <h2 className='text-4xl lg:text-7xl font-bold text-center text-primary mt-10'>Why Choose <span className='text-accent'>Us</span></h2>
          <p className='text-base text-primary/70 text-center mt-8 mx-auto w-full lg:w-2/3'>Our goal is to provide our investors with a reliable source of high income, while minimizing any possible risks and offering a high-quality service.</p>
          <div className="lg:grid grid-cols-12 gap-10 mt-20 space-y-10 lg:space-y-0">
            <motion.div className='col-span-4 space-y-4 border border-gray-800 p-7' ref={legal} variants={{ initlegal: { scale: 0.5, opacity: 0 }, playlegal: { scale: 1, opacity: 1 } }} initial="initlegal" animate={controls} transition={{ duration: 0.3 }}>
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-accent">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                </svg>
                <h4 className='text-xl font-bold text-accent'>Legal company</h4>
              </div>
              <p className='text-base text-primary/75'>Our company conducts absolutely legal activities in the legal field. We are certified to operate investment business, we are legal and safe.</p>
            </motion.div>
            <motion.div className='col-span-4 space-y-4 border border-gray-800 p-7' ref={trading} variants={{ inittrading: { scale: 0.5, opacity: 0 }, playtrading: { scale: 1, opacity: 1 } }} initial="inittrading" animate={controls} transition={{ duration: 0.6 }}>
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-accent">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
              </svg>
                <h4 className='text-xl font-bold text-accent'>Trading success</h4>
              </div>
              <p className='text-base text-primary/75'>Our community success speaks for itself. The markets have never been more exciting than they are now. Success can be found both ways and our trade ideas ride the wave up and take advantage of the downward moves.</p>
            </motion.div>
            <motion.div className='col-span-4 space-y-4 border border-gray-800 p-7' ref={risk} variants={{ initrisk: { scale: 0.5, opacity: 0 }, playrisk: { scale: 1, opacity: 1 } }} initial="initrisk" animate={controls} transition={{ duration: 0.9 }}>
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
                </svg>
                <h4 className='text-xl font-bold text-accent'>Risk management</h4>
              </div>
              <p className='text-base text-primary/75'>The Company continually identifies, assesses, and monitors each type of risk associated with its operations.</p>
            </motion.div>
            <motion.div className='col-span-4 space-y-4 border border-gray-800 p-7' ref={rely} variants={{ initrely: { scale: 0.5, opacity: 0 }, playrely: { scale: 1, opacity: 1 } }} initial="initrely" animate={controls} transition={{ duration: 1 }}>
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
                <h4 className='text-xl font-bold text-accent'>High reliability</h4>
              </div>
              <p className='text-base text-primary/75'>We are trusted by a huge number of people. We are working hard constantly to improve the level of our security system and minimize possible risks.</p>
            </motion.div>
            <motion.div className='col-span-4 space-y-4 border border-gray-800 p-7' ref={refer} variants={{ initrefer: { scale: 0.5, opacity: 0 }, playrefer: { scale: 1, opacity: 1 } }} initial="initrefer" animate={controls} transition={{ duration: 1.3 }}>
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
                <h4 className='text-xl font-bold text-accent'>Referral Program</h4>
              </div>
              <p className='text-base text-primary/75'>We are offering a certain level of referral income through our referral program. you can increase your income by simply refer a few people.</p>
            </motion.div>
            <motion.div className='col-span-4 space-y-4 border border-gray-800 p-7' ref={support} variants={{ initsupport: { scale: 0.5, opacity: 0 }, playsupport: { scale: 1, opacity: 1 } }} initial="initsupport" animate={controls} transition={{ duration: 1.5 }}>
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <h4 className='text-xl font-bold text-accent'>24/7 support</h4>
              </div>
              <p className='text-base text-primary/75'>We provide 24/7 customer support through e-mail and telegram. Our support representatives are periodically available to elucidate any difficulty..</p>
            </motion.div>
          </div>
        </section>
    )
}

export default WhyChooseUs