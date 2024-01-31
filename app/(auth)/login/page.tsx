import Link from "next/link"

const Login = () => {
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
                        <img src="https://images.pexels.com/photos/6802052/pexels-photo-6802052.jpeg?auto=compress&cs=tinysrgb&w=800" alt="bannerImg" className='w-full h-screen object-cover object-right-bottom lg:object-center' />
                    </div>
                </div>
                <div className="col-span-5 bg-primary whitebgimg h-screen lg:h-full">
                    <div className="flex justify-center items-center w-full h-full">
                        <form action="" method="post" className="w-72 lg:w-72 space-y-5">
                            <h1 className="text-3xl font-light text-center">Log into your account</h1>
                            <p className="font-light text-base text-secondary/70 hidden">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, enim?</p>
                            <div className="">
                                <div className='space-y-1'>
                                    <label htmlFor="" className="text-secondary/70 text-sm">Username</label>
                                    <input type="text" name="" id="" placeholder="Input your username" className='w-full px-3 py-2 bg-slate-200 rounded-md text-sm placeholder:text-xs outline-accent' />
                                </div>
                                <div className='space-y-1 mt-3'>
                                    <label htmlFor="" className="text-secondary/70 text-sm">Password</label>
                                    <input type="password" name="" id="" placeholder="xxxxxxxxxx" className='w-full px-3 py-2 bg-slate-200 rounded-md text-sm placeholder:text-xs outline-accent' />
                                </div>
                                <Link href="/forgot" className="text-xs mt-3 mb-5 block text-accent underline text-end">Forgot password?</Link>
                                <button type="submit" className="py-3 w-full bg-accent rounded-md text-sm text-bold text-primary">Sign in</button>
                                <p className="text-sm mt-4 text-center">Don't have an account? <Link href="/register" className="text-accent underline">Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Login