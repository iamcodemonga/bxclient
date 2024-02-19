import Sidebar from '@/components/sidebar/Admin'
import DepositsTable from '@/components/tables/Deposits'
import Navbar from '@/components/AdminNav'
import axios from 'axios'

import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import TopUpForm from '@/components/forms/TopUp'

const AllDeposits = async() => {
    const api = process.env.API_ROOT;
    const session = await getServerSession(authOptions)
    if (session?.user?.email != "admin@botexfinance.com") {
        redirect('/account');
    }
    // const url = `${api}/user/?email=${session?.user?.email}`;
    // const { data } = await axios.get(url);
    const initialRequests = await axios.get(`${api}/deposits/`)

    return (
        <section className='flex w-full h-screen'>
            <Sidebar />
            <main className='w-full lg:ml-60 px-5 overflow-x-hidden whitebgimg'>
                <Navbar />
                {/* <TopUpForm /> */}
                <DepositsTable alldeposits={initialRequests.data.deposits} />
                <footer className='pt-10 pb-5'>
                    <p className='text-gray-700 text-sm text-center'>copyright&copy; botexFinance 2024</p>
                </footer>
            </main>
        </section>
    )
}

export default AllDeposits