import React from 'react'
import Navbar from '@/components/AccountNav'
import Sidebar from '@/components/sidebar/Account'
import CryptoTable from '@/components/tables/Crypto'
import Link from 'next/link'

const page = () => {
    return (
        <section className='flex w-full h-screen'>
            <Sidebar />
            <main className='w-full lg:ml-60 px-5 overflow-x-hidden whitebgimg'>
                <Navbar />
                <section className='mt-7 lg:mt-3'>
                    <h1 className="text-3xl mb-5"> Michael231</h1>
                    <div className='grid grid-cols-12 gap-6 mt-7 lg:mt-0'>
                        <div className='col-span-12 md:col-span-3 py-5 px-5 md:px-10 rounded-2xl bg-accent flex justify-between items-center border border-accent'>
                            <div>
                                <p className='mb-1 text-secondary text-xs'>Balance</p>
                                <h3 className='text-lg text-primary font-bold'>$87.48M</h3>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-gray-900">
                                    <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
                                    <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
                                    <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" />
                                    <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" />
                                </svg>
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-3 py-5 px-5 md:px-10 rounded-2xl bg-accent flex justify-between items-center border border-accent'>
                            <div>
                                <p className='mb-1 text-secondary text-xs'>Total Deposit</p>
                                <h3 className='text-lg text-primary font-bold'>$200,000</h3>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-gray-900">
                                    <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
                                    <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-3 py-5 px-5 md:px-10 rounded-2xl bg-accent flex justify-between items-center border border-accent'>
                            <div>
                                <p className='mb-1 text-secondary text-xs'>Total Withdrawals</p>
                                <h3 className='text-lg text-primary font-bold'>$10,000</h3>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-gray-900">
                                    <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-3 py-5 px-5 md:px-10 rounded-2xl bg-accent flex justify-between items-center border border-accent'>
                            <div>
                                <p className='mb-1 text-secondary text-xs'>Referral Earnings</p>
                                <h3 className='text-lg text-primary font-bold'>$2500</h3>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-gray-900">
                                    <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>
                <CryptoTable />
                <footer className='pt-10 pb-5'>
                    <p className='text-gray-700 text-sm text-center'>copyright&copy; botexFinance 2024</p>
                </footer>
            </main>
        </section>
    )
}

export default page