import Sidebar from '@/components/sidebar/Account'
import ReferralList from '@/components/tables/Referrals'
import Navbar from '@/components/AccountNav'
import axios from 'axios'

import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import ReferrerForm from '@/components/forms/Referrer'
import TidioChat from '@/components/TidioChat'
// import TawkToChat from '@/components/TawkTo'

const Referrals = async() => {
    const api = process.env.API_ROOT;
    const session = await getServerSession(authOptions)
    if (session?.user?.email == "admin@botexfinance.com") {
        redirect('/admin');
    }
    const url = `${api}/user/?email=${session?.user?.email}`;
    const { data } = await axios.get(url);
    const initialRequests = await axios.get(`${api}/user/bonus/${data.profile.id}`)

    return (
        <section className='flex w-full h-screen'>
            <Sidebar />
            <main className='w-full lg:ml-60 px-5 overflow-x-hidden whitebgimg'>
                <Navbar />
                <section className='mt-7 lg:mt-3'>
                    <ReferrerForm username={data.profile.username} />
                </section>
                <ReferralList allbonuses={initialRequests.data.bonuses} />
                <footer className='pt-10 pb-5'>
                    <p className='text-gray-700 text-sm text-center'>copyright&copy; botexFinance 2024</p>
                </footer>
            </main>
            <TidioChat />
            {/* <TawkToChat /> */}
        </section>
    )
}

export default Referrals