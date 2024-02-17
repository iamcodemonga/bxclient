import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

import { authOptions } from '../api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import TawkToChat from '@/components/TawkTo'

const Contact = async() => {
    let user: string | null = null;
    const session = await getServerSession(authOptions)
    console.log(session?.user)
    if (session?.user) {
      user = session.user.email as string;
    }

    return (
        <main className="overflox-x-hidden">
            <Navbar user={user} />
            <Banner photo='https://images.pexels.com/photos/859264/pexels-photo-859264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' title='Reach out to us.' active='Contact' />
            <section className='w-full pt-16 lg:pt-24 pb-16 px-5 lg:px-20 relative bg-accent'>
                <div className='lg:grid grid-cols-12 gap-x-20 space-y-10 lg:space-y-0 justify-items-center'>
                    <div className='lg:col-span-6 space-y-2'>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mr-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <h4 className='font-bold text-2xl lg:text-3xl text-secondary'>Office Address</h4>
                        </div>
                        <p className='text-secondary/80'>7 Home Farm, Bagshot Park, Bagshot, Surrey, UK, GU19 5PJ</p>
                    </div>
                    <div className='lg:col-span-6 space-y-2'>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mr-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <h4 className='font-bold text-2xl lg:text-3xl text-secondary'>Mail information</h4>
                        </div>
                        <p className='text-secondary/80'><a href="mailto:management@botexfinance.com">management@botexfinance.com</a></p>
                    </div>
                </div>
            </section>
            <section className='w-full pt-16 lg:pt-32 pb-16 px-5 lg:px-20 relative whitebgimg'>
                <div className="lg:grid grid-cols-12 gap-x-16 space-y-16 lg:space-y-0">
                    <div className="col-span-12 lg:col-span-5 hidden lg:block">
                        <img src="https://images.pexels.com/photos/4064230/pexels-photo-4064230.jpeg?auto=compress&cs=tinysrgb&w=800" className='w-full rounded-xl' alt="about_pix" />
                    </div>
                    <div className="col-span-12 lg:col-span-7 space-y-8">
                        <h2 className="text-center lg:text-start text-5xl lg:text-7xl font-bold">Contact <span className='text-accent'>Us</span></h2>
                        <p className="text-base text-secondary/50">Do not hesitate to reach out. Just fill in the contact form here and we'll be sure to reply as fast as possible.</p>
                        <form action="" method="post" className='space-y-5'>
                            <div className='space-y-2'>
                                <label htmlFor="">Fullname</label>
                                <input type="text" name="" id="" placeholder="what's your name?" className='w-full px-4 py-2 bg-slate-200' />
                            </div>
                            <div className='space-y-2'>
                                <label htmlFor="">Email address</label>
                                <input type="text" name="" id="" placeholder="Your E-mail address!" className='w-full px-4 py-2 bg-slate-200' />
                            </div>
                            <div className='space-y-2'>
                                <label htmlFor="">Subject</label>
                                <input type="text" name="" id="" placeholder="What's the subject!" className='w-full px-4 py-2 bg-slate-200' />
                            </div>
                            <div className='space-y-2'>
                                <label htmlFor="">Message</label>
                                <textarea name="" id=""  className='w-full px-4 py-5 bg-slate-200' placeholder='Write us a message!'></textarea>
                            </div>
                            <button type="submit" className='px-20 py-3 bg-accent rounded-md'>Submit</button>
                        </form>
                    </div>
                </div>
            </section>
            <TawkToChat />
            <Footer />
        </main>
    )
}

export default Contact