"use client"

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

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
                        <div className='absolute top-0 left-0 w-full h-full bg-secondary/30 flex items-end px-5 lg:px-20'>
                            <div className='mb-16 lg:mb-36 w-full lg:w-2/4 space-y-7'>
                            <h1 className='text-primary text-3xl lg:text-5xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                            <p className='text-gray-200 text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus sed iste odit illum distinctio numquam inventore iusto dolorem dolores vitae?</p>
                            <div className='flex items-center space-x-5'>
                                <button type="button" className='px-10 py-2 bg-accent text-primary rounded-full hover:bg-accent/70'>Get started</button>
                                {/* <button type="button" className='px-10 py-2 bg-accent text-primary rounded-full hover:bg-accent/70'>Register</button> */}
                            </div>
                            </div>
                        </div>
                        <img src="https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg" alt="bannerImg" className='w-full h-full object-cover object-center lg:object-center' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-screen bg-secondary'>
                        <div className='absolute top-0 left-0 w-full h-full bg-secondary/30 flex items-end px-5 lg:px-20'>
                            <div className='mb-16 lg:mb-36 w-full lg:w-2/4 space-y-7'>
                            <h1 className='text-primary text-3xl lg:text-5xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                            <p className='text-gray-200 text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus sed iste odit illum distinctio numquam inventore iusto dolorem dolores vitae?</p>
                            <div className='flex items-center space-x-5'>
                                <button type="button" className='px-10 py-2 bg-accent text-primary rounded-full hover:bg-accent/70'>Get started</button>
                                {/* <button type="button" className='px-10 py-2 bg-accent text-primary rounded-full hover:bg-accent/70'>Register</button> */}
                            </div>
                            </div>
                        </div>
                        <img src="https://images.pexels.com/photos/4342497/pexels-photo-4342497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="bannerImg" className='w-full h-full object-cover object-right lg:object-center' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-screen bg-secondary'>
                        <div className='absolute top-0 left-0 w-full h-full bg-secondary/30 flex items-end px-5 lg:px-20'>
                            <div className='mb-16 lg:mb-36 w-full lg:w-2/4 space-y-7'>
                            <h1 className='text-primary text-3xl lg:text-5xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                            <p className='text-gray-200 text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus sed iste odit illum distinctio numquam inventore iusto dolorem dolores vitae?</p>
                            <div className='flex items-center space-x-5'>
                                <button type="button" className='px-10 py-2 bg-accent text-primary rounded-full hover:bg-accent/70'>Get started</button>
                                {/* <button type="button" className='px-10 py-2 bg-accent text-primary rounded-full hover:bg-accent/70'>Register</button> */}
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