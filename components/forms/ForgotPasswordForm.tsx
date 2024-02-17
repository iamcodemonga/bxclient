"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import toast from "react-hot-toast"
import { newPassword } from '@/actions'
import { useRouter } from "next/navigation"
import ForgotPasswordBtn from '../button/ForgotPasswordBtn'

type Props = {}

const ForgotPasswordForm = (props: Props) => {

    const [ email, setEmail ] = useState<string>("")
    const router = useRouter()
    // const [ visible, setVisibility ] = useState<boolean>(false)

    const handleSubmit = async() => {
        const result = await newPassword({ email });
        if (result?.error) {
            toast.error(result?.error)
            return;
        }
        // setVisibility(true);
        toast.success("Successful!");
        router.push('/login')
        // setPlan("starter");
        // setMethod("bitcoin");
        // setAmount("");
        // setWallet("");
        return;
    }

    return (
        <form action={async () => {
            await handleSubmit()
        }} method="post" className="w-72 lg:w-72 space-y-5">
            <h1 className="text-3xl font-light text-center">Forgot Password?</h1>
            <p className="font-light text-base text-secondary/70 hidde text-center">We'll send a new AI generated password to your email address.</p>
            <div className="">
                <div className='space-y-1'>
                    <label htmlFor="" className="text-secondary/70 text-sm">E-mail address</label>
                    <input type="email" name="email" id="email" placeholder="Input your email" className='w-full px-3 py-2 bg-slate-200 rounded-md text-sm placeholder:text-xs outline-accent' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <ForgotPasswordBtn />
                <p className="text-sm mt-4 text-center">Don't have an account? <Link href="/register" className="text-accent underline">Register</Link></p>
            </div>
        </form>
    )
}

export default ForgotPasswordForm