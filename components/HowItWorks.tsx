"use client"

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const HowItWorks = () => {

    const create = useRef(null);
    const deposit = useRef(null);
    const profit = useRef(null);
    const createInView = useInView(create, { once: true })
    const depositInView = useInView(deposit, { once: true })
    const profitInView = useInView(profit, { once: true })
    const controls = useAnimation()

    useEffect(() => {
      if (createInView) {
        controls.start("playcreate")
      }
      if (depositInView) {
        controls.start("playdeposit")
      }
      if (profitInView) {
        controls.start("playprofit")
      }
  }, [createInView, depositInView, profitInView])

    return (
        <section className="w-full py-36 px-5 lg:px-20 bg-gray-100">
          <h2 className='text-4xl lg:text-7xl font-bold text-center text-secondary'>How It <span className='text-accent'>Works</span></h2>
          <p className='text-base text-secondary/70 text-center mt-8 mx-auto w-full lg:w-2/3'>Get involved in our tremendous platform and Invest. We will utilize your money and give you profit in your wallet automatically.</p>
          <div>
            <div className="lg:grid grid-cols-12 mt-16 gap-x-10 overflow-hidden">
              <motion.div className='col-span-4 space-y-4 py-7 px-4' ref={create} variants={{ initcreate: { x: -100, opacity: 0 }, playcreate: { x: 0, opacity: 1 } }} initial="initcreate" animate={controls} transition={{ duration: 0.8 }}>
                <div className="flex items-center space-x-3 relative">
                <h3 className='absolute top-0 left-6 text-9xl font-black text-accent/10'>01</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-accent">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                  <h4 className='text-xl font-bold text-secondary'>Create Account</h4>
                </div>
                <p className='text-base text-secondary/75 w-full'>Fill in your personal details in our secure online application and login to your dashboard.</p>
              </motion.div>
              <motion.div className='col-span-4 space-y-4 py-7 px-4 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-r lg:border-l border-slate-300' ref={deposit} variants={{ initdeposit: { scale: 0.5, opacity: 0 }, playdeposit: { scale: 1, opacity: 1 } }} initial="initdeposit" animate={controls} transition={{ duration: 0.5 }}>
                <div className="flex items-center space-x-3 relative">
                  <h3 className='absolute top-0 left-6 text-9xl font-black text-accent/10'>02</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-accent">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                  </svg>
                  <h4 className='text-xl font-bold text-secondary'>Deposit</h4>
                </div>
                <p className='text-base text-secondary/75 w-full'>Invest by depositing into any of our plan using cryptocurrencies(Bitcoin, Ethereum, USDT, BNB).</p>
              </motion.div>
              <motion.div className='col-span-4 space-y-4 py-7 px-4' ref={profit} variants={{ initprofit: { x: 100, opacity: 0 }, playprofit: { x: 0, opacity: 1 } }} initial="initprofit" animate={controls} transition={{ duration: 0.8 }}>
                <div className="flex items-center space-x-3 relative">
                  <h3 className='absolute top-0 left-6 text-9xl font-black text-accent/10'>03</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-accent">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                  </svg>
                  <h4 className='text-xl font-bold text-secondary'>Get Profit</h4>
                </div>
                <p className='text-base text-secondary/75 w-full'>Once your payment is approved, you will imediately start making profit on daily basis.</p>
              </motion.div>
            </div>
          </div>
        </section>
    )
}

export default HowItWorks