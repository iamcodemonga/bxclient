import Sidebar from '@/components/sidebar/Account'
import UserWithdrawals from '@/components/tables/UserWithdrawals'
import Navbar from '@/components/AccountNav'
import React from 'react'

const Withdrawals = () => {
    return (
        <section className='flex w-full h-screen'>
            <Sidebar />
            <main className='w-full lg:ml-60 px-5 overflow-x-hidden whitebgimg'>
                <Navbar />
                <section className='mt-7 lg:mt-3'>
                    <form action="" method="post" className='border border-accent rounded-xl px-3 lg:px-10 py-7 lg:py-10 space-y-6'>
                        <h1 className="text-3xl">Withdraw Profit</h1>
                        <div className='space-y-1'>
                            <label htmlFor="" className='text-sm text-slate-500'>Preferred Method</label>
                            <select name="" id="" className='w-full px-4 py-2 bg-slate-200 rounded-lg outline-accent'>
                                <option value="">Bitcoin</option>
                                <option value="">Ethereum</option>
                                <option value="">USDT</option>
                                <option value="">BUSD</option>
                            </select>
                        </div>
                        <div className='space-y-1'>
                            <label htmlFor="" className='text-sm text-slate-500'>Withdrawal Amount</label>
                            <input type="number" name="" id="" className='w-full px-4 py-2 bg-slate-200 rounded-lg outline-accent' placeholder='0.00' />
                        </div>
                        <div className='space-y-1'>
                            <label htmlFor="" className='text-sm text-slate-500'>Wallet Address</label>
                            <input type="text" name="" id="" className='w-full px-4 py-2 bg-slate-200 rounded-lg outline-accent' placeholder='Enter wallet address' />
                        </div>
                        <button type="submit" className='bg-accent px-20 py-3 rounded-lg text-primary'>Submit</button>
                    </form>
                </section>
                <UserWithdrawals />
                <footer className='pt-10 pb-5'>
                    <p className='text-gray-700 text-sm text-center'>copyright&copy; botexFinance 2024</p>
                </footer>
            </main>
        </section>
    )
}

export default Withdrawals