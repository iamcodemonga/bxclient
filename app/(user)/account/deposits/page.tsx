import React from 'react'
import Sidebar from '@/components/sidebar/Account'
import DepositsTable from '@/components/tables/UserDeposits'
import Navbar from '@/components/AccountNav'
import axios from 'axios'

import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import DepositsForm from '@/components/forms/Deposits'
import TawkToChat from '@/components/TawkTo'

const Deposits = async() => {
    const api = process.env.API_ROOT;
    const session = await getServerSession(authOptions)
    if (session?.user?.email == "admin@botexfinance.com") {
        redirect('/admin');
    }
    const url = `${api}/user/?email=${session?.user?.email}`;
    const { data } = await axios.get(url);
    const initialRequests = await axios.get(`${api}/deposits/${data.profile.id}`)

    return (
        <section className='flex w-full h-screen'>
            <Sidebar />
            <main className='w-full lg:ml-60 px-5 overflow-x-hidden whitebgimg'>
                <Navbar />
                <section className='mt-7 lg:mt-3'>
                    <DepositsForm userid={data.profile.id} email={data.profile.email} username={data.profile.username} />
                </section>
                <DepositsTable alldeposits={initialRequests.data.deposits} />
                <footer className='pt-10 pb-5'>
                    <p className='text-gray-700 text-sm text-center'>copyright&copy; botexFinance 2024</p>
                </footer>
            </main>
            <TawkToChat />
        </section>
    )
}

export default Deposits