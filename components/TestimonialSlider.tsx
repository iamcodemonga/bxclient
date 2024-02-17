"use client"

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialSlider = () => {
    return (
        <>
            {/* <div className="p-5 bg-accent rounded-lg min-w-80">
                <p className='text-primary/90 text-sm mb-3 border-b border-amber-400 pb-3'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ex quo odit illum cumque rem et saepe. Sed, maiores? Libero illum iste magni pariatur quo. Accusamus aliquam nobis provident. Repudiandae!"</p>
                <h5 className='text-primary mt-3 font-bold'>Jao Xhing </h5>
            </div> */}
            <div className='lg:flex mt-14 lg:mt-20 w-full'>
                <div className='slider-container flex gap-3 lg:gap-6 overflow-x-auto w-full px-4 relative pb-3 scroll-smooth bar-'>
                    <div className="p-5 bg-accent rounded-lg lg:min-w-96 min-w-full">
                        <p className='text-primary/90 text-sm mb-3 border-b border-amber-400 pb-3'>"Honestly I met the turning point in my financial life with Botexfinance.com A very reliable and profitable company. I Started my investment plan early last month and ever since I'm happy. This is me saying thank you to Botexfinance and greater heights."</p>
                        <h5 className='text-primary mt-3 font-bold'>Lewin brown </h5>
                    </div>
                    <div className="p-5 bg-accent rounded-lg lg:min-w-96 min-w-full">
                        <p className='text-primary/90 text-sm mb-3 border-b border-amber-400 pb-3'>"Botexfinance Traders have built an impressive investment platform, crypto investors like me now have the ability to earn a return on their investment. I’d recommend this to anyone that wants to generate income on their crypto"</p>
                        <h5 className='text-primary mt-3 font-bold'>Julia mokhanov </h5>
                    </div>
                    <div className="p-5 bg-accent rounded-lg lg:min-w-96 min-w-full">
                        <p className='text-primary/90 text-sm mb-3 border-b border-amber-400 pb-3'>"I don’t always use crypto investment but when, it will only be trustworthy & reliable investment platform built by an awesome team. My digital finances are with Botexfinance always…"</p>
                        <h5 className='text-primary mt-3 font-bold'>Lee devin </h5>
                    </div>
                    <div className="p-5 bg-accent rounded-lg lg:min-w-96 min-w-full">
                        <p className='text-primary/90 text-sm mb-3 border-b border-amber-400 pb-3'>"Botex Finance really surpassed my expectations. Trading on the platform is excellent and it allows for making accurate graphical analyses of the market, I recommend it for anyone."</p>
                        <h5 className='text-primary mt-3 font-bold'>Alan parker </h5>
                    </div>
                    <div className="p-5 bg-accent rounded-lg lg:min-w-96 min-w-full ">
                        <p className='text-primary/90 text-sm mb-3 border-b border-amber-400 pb-3'>"I met the turning point in my financial life with Botexfinance.com A very reliable and profitable company. I Started my investment plan early last month and ever since I'm happy. This is me saying thank you to Botexfinance and greater heights."</p>
                        <h5 className='text-primary mt-3 font-bold'>Mike Reece </h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialSlider