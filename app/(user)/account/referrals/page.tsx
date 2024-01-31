import Sidebar from '@/components/sidebar/Account'
import ReferralList from '@/components/tables/Referrals'
import Navbar from '@/components/AccountNav'
import React from 'react'

const Referrals = () => {
    return (
        <section className='flex w-full h-screen'>
            <Sidebar />
            <main className='w-full lg:ml-60 px-5 overflow-x-hidden whitebgimg'>
                <Navbar />
                <section className='mt-7 lg:mt-3'>
                    <form action="" method="post" className='border border-accent rounded-xl px-3 lg:px-10 py-7 lg:py-10 space-y-6'>
                        <h1 className="text-3xl">Refer and Earn</h1>
                        <div className='space-y-1'>
                            <label htmlFor="" className='text-sm text-slate-500'>Referral Link</label>
                            <div className='flex items-center'>
                                <input type="text" name="" id="" className='w-full px-4 py-2 bg-slate-200 rounded-tl-lg rounded-bl-lg outline-none' placeholder='Enter wallet address' disabled value={`https://botexfinance.com/register?ref=michael345`} />
                                <button type="button" className='pr-4 py-2 bg-slate-200 rounded-tr-lg rounded-br-lg text-accent font-bold'>copy</button>
                            </div>
                        </div>
                    </form>
                </section>
                <ReferralList />
                <footer className='pt-10 pb-5'>
                    <p className='text-gray-700 text-sm text-center'>copyright&copy; botexFinance 2024</p>
                </footer>
            </main>
        </section>
    )
}

export default Referrals