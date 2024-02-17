"use client"

import Link from 'next/link';
import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'


const Packages = () => {

    type TPlan = {
        name: string;
        minimum: number;
        maximum: number;
        percentage: number;
        duration: string;
        popular: boolean;
    }

    const plans: Array<TPlan> = [
        { name: "Starter", minimum: 100, maximum: 999, percentage: 5, duration: "2 days", popular: false }, 
        { name: "Basic", minimum: 1000, maximum: 4999, percentage: 10, duration: "5 days", popular: false },
        { name: "Advanced", minimum: 5000, maximum: 49999, percentage: 15, duration: "2 weeks", popular: true },
        { name: "Long term", minimum: 50000, maximum: 1000000, percentage: 25, duration: "1 month", popular: false },
    ]

    const container = useRef(null);
    const isInView = useInView(container, { once: true })
    const controls = useAnimation()

    useEffect(() => {
        console.log(isInView)
        if (isInView) {
          controls.start("play")
        }
      }, [isInView])

    return (
        <section className="w-full pt-36 pb-44 px-5 lg:px-20 bg-gray-100 relative">
            <h2 className='text-4xl lg:text-7xl font-bold text-center'>Investment <span className='text-accent'>Plans</span></h2>
            <p className='text-base text-secondary/50 text-center mt-8 mx-auto w-full lg:w-2/3'>To make a solid investment, you have to know where you are investing. Find a plan which is best for you.</p>
            <div className="md:grid grid-cols-12 gap-x-10 mt-24 space-y-16 md:space-y-0 gap-y-10" ref={container}>
                {plans.map((plan: TPlan, index:number) => <motion.div className="md:col-span-6 lg:col-span-3 border-4 border-accent rounded-xl px-5 py-10 relative" key={index} variants={{ init: { y: 150, opacity: 0 }, play: { y: 0, opacity: 1 } }} initial="init" animate={controls} transition={{ duration: (index == 0 ? 0.5 : index == 1 ? 1 : index == 2 ? 1.5 : index == 3 ? 2 : 0) }}>
                    {plan.popular && <div className='bg-secondary px-10 py-2 text-primary absolute -top-5 -right-3 rotate-12'>Most Popular</div>}
                    <h3 className='text-2xl font-semibold text-accent text-center'>{plan.name} Plan</h3>
                    <p className='border-b border-accent mt-20 mb-7 text-center text-sm text-secondary/80'>Minimum Price - ${plan.minimum.toLocaleString()}</p>
                    {/* <p className='border-b border-accent my-7 text-center'>Minimum Price - $200</p> */}
                    <p className='border-b border-accent my-7 text-center text-sm text-secondary/80'>Maximum Price - {plan.maximum < 100000 ? '$'+plan.maximum.toLocaleString(): "unlimited"}</p>
                    <p className='border-b border-accent mt-7 mb-4 text-center text-sm text-secondary/80'>Referral bonus - 10%</p>
                    <p className='border-b border-accent mb-10 pb-3 text-center text-sm text-secondary/80'>Total {plan.percentage}% + <span className='px-5 py-1 bg-accent text-primary rounded-md text-sm font-light'>Capital</span></p>
                    <h4 className='text-lg font-bold text-green-500 text-center mb-5'>{plan.percentage}% in {plan.duration}</h4>
                    <div className='flex justify-center w-full'>
                        <Link href="/account/deposits" className='text-center px-10 py-2 rounded-md bg-accent'>Invest Now</Link>
                    </div>
                    {/* <button type="button" className='mx-auto block px-10 py-2 rounded-md bg-accent'>Invest Now</button> */}
                </motion.div>)}
            </div>
        </section>
    )
}

export default Packages