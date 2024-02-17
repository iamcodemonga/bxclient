"use client"

import { useState } from 'react'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from 'framer-motion'

const AccountNav = () => {

    const [ open, setOpen ] = useState<boolean>(false)
    const path = usePathname()

    return (
        <>
            <nav className='flex items-center justify-between lg:justify-end sticky top-0 py-7 lg:py-7 bg-primary whitebgimg'>
                <Link href={`/`} className='text-xl text-accent font-bold lg:hidden'>BotexFinance</Link>
                <button className='flex justify-center items-center lg:hidden' type='button' onClick={() => setOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>
                    <span className='text-xl'>Menu</span>
                </button>
            </nav>
            <motion.div className={`z-50 bg-black/90 backdrop-blur-md w-full h-full fixed top-0 left-0 ${open ? "flex" : "hidden"} px-10 items-center`} layout>
                <button type="button" className='flex items-center absolute right-5 top-7 text-gray-300' onClick={() => setOpen(false)}>close<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </button>
                <div className='space-y-7 w-full'>
                    <Link href="/account" className={path == '/account' ? 'text-3xl text-accent flex items-center' : 'text-lg text-gray-300 flex items-center'}>Dashboard</Link>
                    <Link href="/account/deposits" className={path == '/account/deposits' ? 'text-3xl text-accent flex items-center' : 'text-lg text-gray-300 flex items-center'}>Deposits</Link>
                    <Link href="/account/withdrawals" className={path == '/account/withdrawals' ? 'text-3xl text-accent flex items-center' : 'text-lg text-gray-300 flex items-center'}>Withdrawals</Link>
                    <Link href="/account/referrals" className={path == '/account/referrals' ? 'text-3xl text-accent flex items-center' : 'text-lg text-gray-300 flex items-center'}>Referrals</Link>
                    <Link href="/account/settings" className={path == '/account/settings' ? 'text-3xl text-accent flex items-center' : 'text-lg text-gray-300 flex items-center'}>Settings</Link>
                    <Link href="/" className='text-lg text-primary block text-center w-full bg-red-500 rounded-md py-2'>Logout</Link>
                </div>
            </motion.div>
        </>
    )
}

export default AccountNav