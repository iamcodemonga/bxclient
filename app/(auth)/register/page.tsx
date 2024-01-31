import Link from "next/link"

const Register = () => {
    return (
        <main className="overflox-x-hidden">
            <div className="fixed top-5 left-5 z-50">
                <Link href="/" className=" lg:text-primary flex items-center space-x-3 hover:font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>Home
                </Link>
            </div>
            <section className="lg:grid grid-cols-12">
                <div className="col-span-7 h-screen relative hidden lg:block">
                    <div className='w-full'>
                        <div className='absolute top-0 left-0 w-full h-full bg-secondary/40 flex items-end px-5 lg:px-20'></div>
                        <img src="https://images.pexels.com/photos/6347729/pexels-photo-6347729.jpeg?auto=compress&cs=tinysrgb&w=800" alt="bannerImg" className='w-full h-screen object-cover object-right-bottom lg:object-center' />
                    </div>
                </div>
                <div className="col-span-5 bg-primary whitebgimg h-full lg:h-screen">
                    <div className="flex justify-center lg:items-center w-full h-full pt-28 pb-20">
                        <form action="" method="post" className="w-72 lg:w-72 space-y-5">
                            <h1 className="text-3xl font-light text-center">Create Account</h1>
                            <p className="font-light text-base text-secondary/70 hidde text-center">Sign up, invest in a plan and <span className="text-accent font-bold">EARN </span>massive profit!</p>
                            <div className="">
                                <div className='space-y-1'>
                                    <label htmlFor="" className="text-secondary/70 text-sm">Fullname</label>
                                    <input type="text" name="" id="" placeholder="Enter your fullname" className='w-full px-3 py-2 bg-slate-200 rounded-md text-sm placeholder:text-xs outline-accent' />
                                </div>
                                <div className='space-y-1 mt-3'>
                                    <label htmlFor="" className="text-secondary/70 text-sm">E-mail address</label>
                                    <input type="text" name="" id="" placeholder="Input your E-mail address" className='w-full px-3 py-2 bg-slate-200 rounded-md text-sm placeholder:text-xs outline-accent' />
                                </div>
                                <div className='space-y-1 mt-3'>
                                    <label htmlFor="" className="text-secondary/70 text-sm">Username</label>
                                    <input type="text" name="" id="" placeholder="Input your username" className='w-full px-3 py-2 bg-slate-200 rounded-md text-sm placeholder:text-xs outline-accent' />
                                </div>
                                <div className='space-y-1 mt-3'>
                                    <label htmlFor="" className="text-secondary/70 text-sm">Password</label>
                                    <input type="password" name="" id="" placeholder="xxxxxxxxxx" className='w-full px-3 py-2 bg-slate-200 rounded-md text-sm placeholder:text-xs outline-accent' />
                                </div>
                                <p className="text-xs mt-3 mb-5 block text-slate-500">By signing up, you have hereby agreed to all our terms and conditions!</p>
                                <button type="submit" className="py-3 w-full bg-accent rounded-md text-sm text-bold text-primary">Register</button>
                                <p className="text-sm mt-4 text-center">Aready have an account? <Link href="/login" className="text-accent underline">Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Register