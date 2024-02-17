"use client"
import Link from "next/link"
import { FormEvent, useState } from "react"
import toast from "react-hot-toast"
import { signIn } from 'next-auth/react';
import { useRouter } from "next/navigation"

const LoginForm = () => {

    const [ username, setUsername ] = useState<string>("")
    const [ password, setPassword ] = useState<string>("")
    const [ loading, setLoading ] = useState<boolean>(false)
    const api = process.env.NEXT_PUBLIC_API_ROOT;
    const router = useRouter()

    const handleLogin = async(event: FormEvent) => {
        event.preventDefault()

        if (!username || !password) {
            toast.error('please, fill in all fields!');
            return;
        }

        setLoading(true)
        // const { data } = await axios.post(`${api}/auth/login`, { username, password }, { withCredentials: true })
        try {
            const data = await signIn("credentials", {
                username,
                password,
                redirect: false
            });

            console.log(data)

            if (data?.error) {
                toast.error(`Username or password is incorrect!`);
                setLoading(false);
                return;
            }

            // toast.success();
            console.log(`welcome back, ${data}`)
            setLoading(false);
            router.push('/account');
            return;
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
        return;
        
    }

    return (
        <form action="" method="post" className="w-72 lg:w-72 space-y-5" onSubmit={(event: FormEvent) => handleLogin(event)}>
            <h1 className="text-3xl font-light text-center">Log into your account</h1>
            <p className="font-light text-base text-secondary/70 hidden">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, enim?</p>
            <div className="">
                <div className='space-y-1'>
                    <label htmlFor="username" className="text-secondary/70 text-sm">Username</label>
                    <input type="text" name="username" id="username" placeholder="Input your username" className='w-full px-3 py-2 bg-slate-200 rounded-md text-sm placeholder:text-xs outline-accent' disabled={loading} value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className='space-y-1 mt-3'>
                    <label htmlFor="password" className="text-secondary/70 text-sm">Password</label>
                    <input type="password" name="password" id="password" placeholder="xxxxxxxxxx" className='w-full px-3 py-2 bg-slate-200 rounded-md text-sm placeholder:text-xs outline-accent' disabled={loading} value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <Link href="/forgot" className="text-xs mt-3 mb-5 block text-accent underline text-end">Forgot password?</Link>
                <button type={loading ? "button" : "submit"} className="py-3 w-full bg-accent rounded-md text-sm text-bold text-primary">{loading ? "Processing..." : "Sign in"}</button>
                <p className="text-sm mt-4 text-center">Don't have an account? <Link href="/register" className="text-accent underline">Register</Link></p>
            </div>
        </form>
    )
}

export default LoginForm