import ForgotPasswordForm from "@/components/forms/ForgotPasswordForm"
import Link from "next/link"

const Forgot = () => {
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
                        <img src="https://images.pexels.com/photos/7534380/pexels-photo-7534380.jpeg?auto=compress&cs=tinysrgb&w=800" alt="bannerImg" className='w-full h-screen object-cover object-right-bottom lg:object-center' />
                    </div>
                </div>
                <div className="col-span-5 bg-primary whitebgimg h-screen lg:h-full">
                    <div className="flex justify-center items-center w-full h-full">
                        <ForgotPasswordForm />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Forgot