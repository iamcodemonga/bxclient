import Link from 'next/link'
import React from 'react'

const Banner = ({ photo, title, active }: { photo: string, title: string, active: string }) => {
    return (
        <header className='w-full h-96 bg-secondary'>
            <div className='absolute top-0 left-0 w-full h-96 bg-secondary/60 flex items-end px-5 lg:px-20'>
                <div className='mb-16 lg:mb-36 w-full lg:w-2/4 space-y-5'>
                    <h1 className='text-primary text-3xl lg:text-5xl font-bold'>{title}</h1>
                    <p className='text-primary/80'><Link href={`/`} className='text-accent font-bold hover:text-white'>Home</Link> | {active}</p>
                </div>
            </div>
            <img src={photo} alt="bannerImg" className='w-full h-full object-cover object-right-bottom lg:object-center' />
        </header>
    )
}

export default Banner