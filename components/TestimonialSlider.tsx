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
                        <p className='text-primary/90 text-sm mb-3 border-b border-amber-400 pb-3'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ex quo odit illum cumque rem et saepe. Sed, maiores? Libero illum iste magni pariatur quo. Accusamus aliquam nobis provident. Repudiandae!"</p>
                        <h5 className='text-primary mt-3 font-bold'>Jao Xhing </h5>
                    </div>
                    <div className="p-5 bg-accent rounded-lg lg:min-w-96 min-w-full">
                        <p className='text-primary/90 text-sm mb-3 border-b border-amber-400 pb-3'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ex quo odit illum cumque rem et saepe. Sed, maiores? Libero illum iste magni pariatur quo. Accusamus aliquam nobis provident. Repudiandae!"</p>
                        <h5 className='text-primary mt-3 font-bold'>Jao Xhing </h5>
                    </div>
                    <div className="p-5 bg-accent rounded-lg lg:min-w-96 min-w-full">
                        <p className='text-primary/90 text-sm mb-3 border-b border-amber-400 pb-3'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ex quo odit illum cumque rem et saepe. Sed, maiores? Libero illum iste magni pariatur quo. Accusamus aliquam nobis provident. Repudiandae!"</p>
                        <h5 className='text-primary mt-3 font-bold'>Jao Xhing </h5>
                    </div>
                    <div className="p-5 bg-accent rounded-lg lg:min-w-96 min-w-full">
                        <p className='text-primary/90 text-sm mb-3 border-b border-amber-400 pb-3'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ex quo odit illum cumque rem et saepe. Sed, maiores? Libero illum iste magni pariatur quo. Accusamus aliquam nobis provident. Repudiandae!"</p>
                        <h5 className='text-primary mt-3 font-bold'>Jao Xhing </h5>
                    </div>
                    <div className="p-5 bg-accent rounded-lg lg:min-w-96 min-w-full ">
                        <p className='text-primary/90 text-sm mb-3 border-b border-amber-400 pb-3'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ex quo odit illum cumque rem et saepe. Sed, maiores? Libero illum iste magni pariatur quo. Accusamus aliquam nobis provident. Repudiandae!"</p>
                        <h5 className='text-primary mt-3 font-bold'>Jao Xhing </h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialSlider