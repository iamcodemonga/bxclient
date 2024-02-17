import Sidebar from '@/components/sidebar/Account'
import UserWithdrawals from '@/components/tables/UserWithdrawals'
import Navbar from '@/components/AccountNav'
import axios from 'axios'

import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import WithdrawalsForm from '@/components/forms/Withdrawals'
import TidioChat from '@/components/TidioChat'
// import TawkToChat from '@/components/TawkTo'

const Withdrawals = async() => {
    const api = process.env.API_ROOT;
    const session = await getServerSession(authOptions)
    if (session?.user?.email == "admin@botexfinance.com") {
        redirect('/admin');
    }
    const url = `${api}/user/?email=${session?.user?.email}`;
    const { data } = await axios.get(url);
    const initialRequests = await axios.get(`${api}/withdrawals/${data.profile.id}`)

    return (
        <section className='flex w-full h-screen'>
            <Sidebar />
            <main className='w-full lg:ml-60 px-5 overflow-x-hidden whitebgimg'>
                <Navbar />
                <section className='mt-7 lg:mt-3'>
                    <WithdrawalsForm userid={data.profile.id} profit={data.metrics.withdrawable} />
                </section>
                <UserWithdrawals initial={initialRequests.data.error ? [] : initialRequests.data.withdrawals} />
                <footer className='pt-10 pb-5'>
                    <p className='text-gray-700 text-sm text-center'>copyright&copy; botexFinance 2024</p>
                </footer>
            </main>
            <TidioChat />
            {/* <TawkToChat /> */}
        </section>
    )
}

export default Withdrawals