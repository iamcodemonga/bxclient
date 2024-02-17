import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Packages from '@/components/Packages'
import Calculator from '@/components/Calculator'
import Footer from '@/components/Footer'
import HowItWorks from '@/components/HowItWorks'
import Banner from '@/components/Banner'

import { authOptions } from '../api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import TidioChat from '@/components/TidioChat'
// import TawkToChat from '@/components/TawkTo'

const Plans = async() => {
    let user: string | null = null;
    const session = await getServerSession(authOptions)
    console.log(session?.user)
    if (session?.user) {
      user = session.user.email as string;
    }

    return (
        <main className='overflow-x-hidden'>
            <Navbar user={user} />
            <Banner photo='https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' title='Invest In Real Estate.' active='Plans' />
            <Packages />
            <Calculator />
            <HowItWorks />
            <TidioChat />
            {/* <TawkToChat /> */}
            <Footer />
        </main>
    )
}

export default Plans