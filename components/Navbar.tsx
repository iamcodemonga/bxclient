"use client"

import Link from "next/link"
import { useState } from 'react'
import { usePathname } from "next/navigation"

const Navbar = () => {
    const [ open, setOpen ] = useState<boolean>(false)
    const path = usePathname()

    return (
        <>
            <div className="fixed top-0 left-0 z-50 bg-secondary/80 w-full">
                {/* <GtopTranslator /> */}
                <nav className='w-full flex justify-between px-5 lg:px-20 py-10 text-primary'>
                    <Link href="/">BotexFinance</Link>
                    <div className='space-x-7 hidden lg:block'>
                        <Link href="/" className={path == "/" ? "text-lg text-accent font-bold" : ""}>Home</Link>
                        <Link href="/plans" className={path == "/plans" ? "text-lg text-accent font-bold" : ""}>Plans</Link>
                        <Link href="/markets" className={path == "/markets" ? "text-lg text-accent font-bold" : ""}>Markets</Link>
                        <Link href="/contact" className={path == "/contact" ? "text-lg text-accent font-bold" : ""}>Contact</Link>
                        <Link href="/about" className={path == "/about" ? "text-lg text-accent font-bold" : ""}>About Us</Link>
                    </div>
                    <div className='space-x-7 hidden lg:block'>
                        {/* <Link href="/login" className={path == "/login" ? "text-lg text-accent font-bold" : ""}>Login</Link>
                        <Link href="/register" className='px-5 py-2 border-2 border-accent rounded-full bg-accent'>Register</Link> */}
                        <Link href={`/account`} className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                        </svg>My Dashboard</Link>
                    </div>
                    <div className='block lg:hidden'>
                        <button type="button" className='flex items-center' onClick={() => setOpen(true)}>menu
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                        </svg>
                        </button>
                    </div>
                </nav>
            </div>
            <div className={`z-50 bg-primary/85 backdrop-blur-md w-full h-full fixed top-0 left-0 ${open ? "flex" : "hidden"} px-10 items-center`}>
                <button type="button" className='flex items-center absolute right-5 top-7 text-gray-700' onClick={() => setOpen(false)}>close<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </button>
                <div className='space-y-7 w-full'>
                    <p><Link href="/" className={path == "/" ? "text-3xl text-accent" : "text-lg text-gray-600"}>Home</Link></p>
                    <p><Link href="/plans" className={path == "/plans" ? "text-3xl text-accent" : "text-lg text-gray-600"}>Plans</Link></p>
                    <p><Link href="/markets" className={path == "/markets" ? "text-3xl text-accent" : "text-lg text-gray-600"}>Markets</Link></p>
                    <p><Link href="/contact" className={path == "/contact" ? "text-3xl text-accent" : "text-lg text-gray-600"}>Contact</Link></p>
                    <p><Link href="/about" className={path == "/about" ? "text-3xl text-accent" : "text-lg text-gray-600"}>About Us</Link></p>
                    <Link href="/login" className='text-lg text-primary block text-center w-full bg-accent rounded-md py-2'>Log in</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar