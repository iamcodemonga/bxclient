"use client"

import React from 'react'
import Sidebar from '@/components/sidebar/Account'
import Navbar from '@/components/AccountNav'

const Settings = () => {
    return (
        <section className='flex w-full h-screen'>
            <Sidebar />
            <main className='w-full lg:ml-60 px-5 overflow-x-hidden whitebgimg'>
                <Navbar />
                <section className='my-0 pt-10 pb-5 lg:px-5'>
                    <div className='grid grid-cols-12 items-start gap-y-10 lg:gap-y-0  lg:gap-x-8'>
                        <div className='col-span-12 lg:col-span-6 border border-accent rounded-xl px-5 lg:px-10 py-10' >
                            <div className='flex w-full justify-center'>
                                <form action="" onSubmit={(e) => null} method="post" className='space-y-5 w-full'>
                                    <h4 className='mb-10 mt-5 lg:mt-0 text-2xl text-center'>Edit Account Info</h4>
                                    <div className='flex flex-col rounded-xl'>
                                        <label htmlFor="current" className='text-slate-500 text-sm'>Fullname</label>
                                        <input className='bg-slate-200 py-2 px-3 outline-none rounded-lg' type={"text"} name="fullname" id="fullname" placeholder='Input your fullname' value={``} onChange={(e) => null} />
                                    </div>
                                    <div className='flex flex-col rounded-xl'>
                                        <label htmlFor="current" className='text-slate-500 text-sm'>Username</label>
                                        <input className='bg-slate-200 py-2 px-3 outline-none rounded-lg' type={"text"} name="username" id="username" placeholder='Input your username' value={`michael`} onChange={(e) => null} disabled />
                                    </div>
                                    <div className='flex flex-col rounded-xl'>
                                        <label htmlFor="current" className='text-slate-500 text-sm'>Email</label>
                                        <input className='bg-slate-200 py-2 px-3 outline-none rounded-lg' type={"text"} name="email" id="email" placeholder='Input your email' value={`michael@gmail.com`} onChange={(e) => null} disabled />
                                    </div>
                                    <div>
                                    <button type="submit" className='bg-accent py-3 px-20 rounded-lg text-sm mb-3 text-primary'>submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 border border-accent rounded-xl px-5 lg:px-10 py-10' >
                            <div className='flex w-full justify-center'>
                                <form action="" onSubmit={(e) => null} method="post" className='space-y-5 w-full'>
                                    <h4 className='mb-10 mt-5 lg:mt-0 text-2xl text-center'>Change Password</h4>
                                    <div className='flex flex-col rounded-xl'>
                                        <label htmlFor="current" className='text-slate-500 text-sm'>Old Password</label>
                                        <div className="flex items-center">
                                            <input className='bg-slate-200 py-2 px-3 outline-none rounded-tl-lg rounded-bl-lg w-full' type={"password"} name="old" id="old" placeholder='xxxxxxxxxx' value={``} onChange={(e) => null} />
                                            <button type="button" className='py-2 pr-3 rounded-tr-lg rounded-br-lg bg-slate-200 text-accent'>show</button>
                                        </div>
                                    </div>
                                    <div className='flex flex-col rounded-xl'>
                                        <label htmlFor="current" className='text-slate-500 text-sm'>New Password</label>
                                        <div className="flex items-center">
                                            <input className='bg-slate-200 py-2 px-3 outline-none rounded-tl-lg rounded-bl-lg w-full' type={"password"} name="new" id="new" placeholder='xxxxxxxxxx' value={``} onChange={(e) => null} />
                                            <button type="button" className='py-2 pr-3 rounded-tr-lg rounded-br-lg bg-slate-200 text-accent'>show</button>
                                        </div>
                                    </div>
                                    <div className='flex flex-col rounded-xl'>
                                        <label htmlFor="current" className='text-slate-500 text-sm'>confirm Password</label>
                                        <div className="flex items-center">
                                            <input className='bg-slate-200 py-2 px-3 outline-none rounded-tl-lg rounded-bl-lg w-full' type={"password"} name="confirm" id="confirm" placeholder='xxxxxxxxxx' value={``} onChange={(e) => null} />
                                            <button type="button" className='py-2 pr-3 rounded-tr-lg rounded-br-lg bg-slate-200 text-accent'>show</button>
                                        </div>
                                    </div>
                                    <div>
                                    <button type="submit" className='bg-accent py-3 px-20 rounded-lg text-sm mb-3 text-primary'>submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className='pt-10 pb-5'>
                    <p className='text-gray-700 text-sm text-center'>copyright&copy; botexFinance 2024</p>
                </footer>
            </main>
        </section>
    )
}

export default Settings