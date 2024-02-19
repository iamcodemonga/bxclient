"use client"

import Link from "next/link"

const Footer = () => {
    return (
        <footer className='bg-gray-100 pt-40 pb-10 px-5 lg:px-20 overflow-x-hidden'>
          <section className='lg:grid lg:grid-cols-12 space-y-20 lg:space-y-0 lg:space-x-20'>
            <div className='col-span-4'>
              <h3 className='text-3xl font-bold'><span>Contact </span><span className='hidden lg:inline-block'>Information</span></h3>
              <p className='flex mt-7'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 lg:w-6 lg:h-6 mt-1 lg:mt-1 mr-2 text-accent">
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
              </svg>7 Home Farm, Bagshot Park, Bagshot, Surrey, UK, GU19 5PJ</p>
              <p className='flex items-center mt-5'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 text-accent">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              <Link href="mailto:management@botexfinance.com" className='underline hover:text-accent'>management@botexfinance.com</Link></p>
            </div>
            <div className='col-span-4'>
              <h3 className='text-3xl font-bold'>Quick Links</h3>
              <Link href={`/privacy`} className='hover:underline hover:text-accent mt-7 mb-3 block'>Privacy policy</Link>
              <Link href={`/about`} className='hover:underline hover:text-accent mt-3 mb-3 block'>FAQs</Link>
              <Link href={`/contact`} className='hover:underline hover:text-accent mt-3 mb-3 block'>Contact</Link>
              <Link href={`/about`} className='hover:underline hover:text-accent mt-3 mb-3 block'>About Us</Link>
              <Link href={`/markets`} className='hover:underline hover:text-accent mt-3 mb-3 block'>Markets</Link>
              <div id="google_translate_element" className=''></div>
            </div>
            <div className='col-span-4'>
              {/* <img src="/logo.png" className="h-0 object-cover" alt="logo" /> */}
              <h3 className="text-accent text-3xl font-extrabold mb-7">BOTEX FINANCE</h3>
              <p className=''>We are botex finance, a leading cryptocurrency investment company focused in trading and making huge profits for our customers. Invest in any of our plans and enjoy unimaginable profit.</p>
            </div>
          </section>
          <p className='text-gray-700 text-sm mt-36 text-center'>copyright&copy; 2024 BotexFinance. All Rights Reserved</p>
        </footer>
    )
}

export default Footer