"use client"

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Link from 'next/link';

const Slider = () => {
    return (
        <div className='w-full h-screen bg-secondary'>
            <Swiper
                rewind={true}
                pagination={{
                    dynamicBullets: true,
                    clickable: true
                }}
                effect='fade'
                autoplay={{
                delay: 5000,
                disableOnInteraction: true,
                }}
                modules={[Pagination, Autoplay, EffectFade]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='w-full h-screen bg-secondary'>
                        <div className='absolute top-0 left-0 w-full h-full bg-secondary/60 flex items-end px-5 lg:px-20'>
                            <div className='mb-16 lg:mb-36 w-full lg:w-2/4 space-y-7'>
                            <h1 className='text-primary text-3xl lg:text-5xl font-bold'>Make your first step to financial freedom.</h1>
                            <p className='text-gray-200 text-base'>We are botex finance, a leading cryptocurrency investment company focused in trading and making huge profits for our customers. Invest in any of our plans and enjoy unimaginable profit.</p>
                            <div className='flex items-center space-x-5'>
                                <Link href="/account/deposits" className='px-10 py-2 bg-accent text-primary rounded-full hover:bg-accent/70'>Get started</Link>
                                {/* <button type="button" className='px-10 py-2 bg-accent text-primary rounded-full hover:bg-accent/70'>Register</button> */}
                            </div>
                            </div>
                        </div>
                        <img src="https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg" alt="bannerImg" className='w-full h-full object-cover object-center lg:object-center' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-screen bg-secondary'>
                        <div className='absolute top-0 left-0 w-full h-full bg-secondary/60 flex items-end px-5 lg:px-20'>
                            <div className='mb-16 lg:mb-36 w-full lg:w-2/4 space-y-7'>
                            <h1 className='text-primary text-3xl lg:text-5xl font-bold'>Your invest, we trade, you make great profits.</h1>
                            <p className='text-gray-200 text-base'>We are botex finance, a leading cryptocurrency investment company focused in trading and making huge profits for our customers. Invest in any of our plans and enjoy unimaginable profit.</p>
                            <div className='flex items-center space-x-5'>
                                <Link href="/account/deposits" className='px-10 py-2 bg-accent text-primary rounded-full hover:bg-accent/70'>Get started</Link>
                                {/* <button type="button" className='px-10 py-2 bg-accent text-primary rounded-full hover:bg-accent/70'>Register</button> */}
                            </div>
                            </div>
                        </div>
                        <img src="https://images.pexels.com/photos/4342497/pexels-photo-4342497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="bannerImg" className='w-full h-full object-cover object-right lg:object-center' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-screen bg-secondary'>
                        <div className='absolute top-0 left-0 w-full h-full bg-secondary/60 flex items-end px-5 lg:px-20'>
                            <div className='mb-16 lg:mb-36 w-full lg:w-2/4 space-y-7'>
                            <h1 className='text-primary text-3xl lg:text-5xl font-bold'>Deposit and monitor your earning progress.</h1>
                            <p className='text-gray-200 text-base'>We are botex finance, a leading cryptocurrency investment company focused in trading and making huge profits for our customers. Invest in any of our plans and enjoy unimaginable profit.</p>
                            <div className='flex items-center space-x-5'>
                                <Link href="/account/deposits" className='px-10 py-2 bg-accent text-primary rounded-full hover:bg-accent/70'>Get started</Link>
                            </div>
                            </div>
                        </div>
                        <img src="https://images.pexels.com/photos/7793730/pexels-photo-7793730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="bannerImg" className='w-full h-full object-cover object-right-bottom lg:object-center' />
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
    )
}

export default Slider