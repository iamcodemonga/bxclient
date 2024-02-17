"use client"

import Link from "next/link"
import { FormEvent, useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

const RegisterForm = ({ referrer }: { referrer: string }) => {

    const [ fullname, setFullname ] = useState<string>("")
    const [ email, setEmail ] = useState<string>("")
    const [ username, setUsername ] = useState<string>("")
    const [ password, setPassword ] = useState<string>("")
    const [ loading, setLoading ] = useState<boolean>(false)
    const api = process.env.NEXT_PUBLIC_API_ROOT;
    const router = useRouter()

    const handleRegister = async(event: FormEvent) => {
        event.preventDefault()
        let fullnameRegex = /^([a-zA-Z ]+)$/;
        let usernameRegex = /^([a-zA-Z0-9\-_]+)$/;
        let emailRegex = /^([a-zA-Z0-9\.\-_]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,10})(\.[a-z]{2,10})?$/;

        if (!fullname || !email || !username || !password) {
            toast.error('please, fill in all fields!');
            return;
        }

        if (!fullnameRegex.test(fullname)) {
            toast.error('fullname format not proper!');
            return;
        }
    
        // check for username REGEX
        if (!usernameRegex.test(username)) {
            toast.error('username format not proper!');
            return;
        }
    
        // check for email REGEX
        if (!emailRegex.test(email)) {
            toast.error('email format not proper!');
            return;
        }
        setLoading(true)
        const { data } = await axios.post(`${api}/auth/register`, { fullname, username, email, password, referrer })
        
        if (data?.error) {
            toast.error(data?.message);
            setLoading(false)
            return;
        }

        const sendmail = await axios.post(`/api/send`, { username, email })
        if (sendmail.data.status == "failed") {
            toast.error("Could not send welcome mail")
            setLoading(false)
            router.push('/login')
        } else {
            toast.success("Account successfully created!")
            setLoading(false)
            router.push('/login')
            return;
        }

        setLoading(false)
        return;
    }

    return (
        <form action="" method="post" className="w-72 lg:w-72 space-y-5" onSubmit={(event: FormEvent) => handleRegister(event)}>
            <h1 className="text-3xl font-light text-center">Create Account</h1>
            <p className="font-light text-base text-secondary/70 hidde text-center">Sign up, invest in a plan and <span className="text-accent font-bold">EARN </span>massive profit!</p>
            <div className="">
                <div className='space-y-1'>
                    <label htmlFor="fullname" className="text-secondary/70 text-sm">Fullname</label>
                    <input type="text" name="fullname" id="fullname" placeholder="Enter your fullname" className='w-full px-3 py-2 bg-slate-200 rounded-md text-sm placeholder:text-xs outline-accent' value={fullname} onChange={(e) => setFullname(e.target.value)} disabled={loading} />
                </div>
                <div className='space-y-1 mt-3'>
                    <label htmlFor="email" className="text-secondary/70 text-sm">E-mail address</label>
                    <input type="email" name="email" id="email" placeholder="Input your E-mail address" className='w-full px-3 py-2 bg-slate-200 rounded-md text-sm placeholder:text-xs outline-accent' value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading} />
                </div>
                <div className='space-y-1 mt-3'>
                    <label htmlFor="username" className="text-secondary/70 text-sm">Username</label>
                    <input type="text" name="username" id="username" placeholder="Input your username" className='w-full px-3 py-2 bg-slate-200 rounded-md text-sm placeholder:text-xs outline-accent' value={username} onChange={(e) => setUsername(e.target.value)} disabled={loading} />
                </div>
                <div className='space-y-1 mt-3'>
                    <label htmlFor="password" className="text-secondary/70 text-sm">Password</label>
                    <input type="password" name="password" id="password" placeholder="xxxxxxxxxx" className='w-full px-3 py-2 bg-slate-200 rounded-md text-sm placeholder:text-xs outline-accent' value={password} onChange={(e) => setPassword(e.target.value)} disabled={loading} />
                </div>
                <p className="text-xs mt-3 mb-5 block text-slate-500">By signing up, you have hereby agreed to all our terms and conditions!</p>
                <button type={loading ? "button" : "submit"} className="py-3 w-full bg-accent rounded-md text-sm text-bold text-primary">{loading ? "Processing..." : "Register"}</button>
                <p className="text-sm mt-4 text-center">Aready have an account? <Link href="/login" className="text-accent underline">Login</Link></p>
            </div>
        </form>
    )
}

export default RegisterForm