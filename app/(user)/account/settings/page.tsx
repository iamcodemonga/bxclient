import React from 'react'
import Sidebar from '@/components/sidebar/Account'
import Navbar from '@/components/AccountNav'
import axios from 'axios'

import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import EditProfileForm from '@/components/forms/EditProfile'
import PasswordForm from '@/components/forms/Password'
import TidioChat from '@/components/TidioChat'
// import TawkToChat from '@/components/TawkTo'

const Settings = async() => {
    const api = process.env.API_ROOT;
    const session = await getServerSession(authOptions)
    if (session?.user?.email == "admin@botexfinance.com") {
        redirect('/admin');
    }
    const url = `${api}/user/?email=${session?.user?.email}`;
    const { data } = await axios.get(url);


    return (
        <section className='flex w-full h-screen'>
            <Sidebar />
            <main className='w-full lg:ml-60 px-5 overflow-x-hidden whitebgimg'>
                <Navbar />
                <section className='my-0 pt-10 pb-5 lg:px-5'>
                    <div className='grid grid-cols-12 items-start gap-y-10 lg:gap-y-0  lg:gap-x-8'>
                        <div className='col-span-12 lg:col-span-6 border border-accent rounded-xl px-5 lg:px-10 py-10' >
                            <div className='flex w-full justify-center'>
                                <EditProfileForm realname={data.profile.fullname} username={data.profile.username} email={data.profile.email} userid={data.profile.id} />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 border border-accent rounded-xl px-5 lg:px-10 py-10' >
                            <div className='flex w-full justify-center'>
                                <PasswordForm userid={data.profile.id} />
                            </div>
                        </div>
                    </div>
                </section>
                <footer className='pt-10 pb-5'>
                    <p className='text-gray-700 text-sm text-center'>copyright&copy; botexFinance 2024</p>
                </footer>
            </main>
            <TidioChat />
            {/* <TawkToChat /> */}
        </section>
    )
}

export default Settings