import React from 'react'
import TestimonialSlider from './TestimonialSlider'

const Testimony = () => {
    return (
        <section className="w-full pb-16 lg:pb-36 px-5 lg:px-20 whitebgimg">
          <h2 className='text-4xl lg:text-7xl font-bold text-center'>Client's <span className='text-accent'>Feedback</span></h2>
          <p className='text-base text-secondary/70 text-center mt-8 mx-auto w-full lg:w-2/3'>We value the opinions and satisfaction of our clients as it helps us know how to serve you better. Feel free to add your testimonies.</p>
          <TestimonialSlider />
        </section>
    )
}

export default Testimony