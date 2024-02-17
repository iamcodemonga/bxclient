"use client"

import { FormEvent, useState } from "react"
import toast from "react-hot-toast"
import axios from "axios";

const EditAdminForm = ({ realname, username, email, userid }: { realname: string; username: string; email: string; userid: number }) => {

    const [ fullname, setFullname ] = useState<string>(realname);
    const [ loading, setLoading ] = useState<boolean>(false)
    const api = process.env.NEXT_PUBLIC_API_ROOT;

    const handleSubmit = async(e: FormEvent) => {
        e.preventDefault();
        const fullnameRegex = /^([a-zA-Z ]+)$/;

        if (!fullname) {
            toast.error("please, fill in your fullname!")
            return;
        }

        if (!fullnameRegex.test(fullname)) {
            toast.error("fullname format not proper!")
            return;
        }

        setLoading(true)
        try {
            const { data } = await axios.put(`${api}/user/edit?id=${userid}`, { fullname })
            if (data.error) {
                setLoading(false)
                toast.error(data.message)
                return;
            }
            setLoading(false)
            toast.success(data.message)
            return;
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
        
    }

    return (
        <form action="" onSubmit={(e) => handleSubmit(e)} method="post" className='space-y-5 w-full' >
            <h4 className='mb-10 mt-5 lg:mt-0 text-2xl text-center'>Edit Admin Info</h4>
            <div className='flex flex-col rounded-xl'>
                <label htmlFor="current" className='text-slate-500 text-sm'>Fullname</label>
                <input className='bg-slate-200 py-2 px-3 outline-none rounded-lg' type={"text"} name="fullname" id="fullname" placeholder='Input your fullname' value={fullname} onChange={(e) => setFullname(e.target.value)} />
            </div>
            <div className='flex flex-col rounded-xl'>
                <label htmlFor="current" className='text-slate-500 text-sm'>Username</label>
                <input className='bg-slate-200 py-2 px-3 outline-none rounded-lg' type={"text"} name="username" id="username" placeholder='Input your username' value={username} onChange={(e) => null} disabled />
            </div>
            <div className='flex flex-col rounded-xl'>
                <label htmlFor="current" className='text-slate-500 text-sm'>Email</label>
                <input className='bg-slate-200 py-2 px-3 outline-none rounded-lg' type={"text"} name="email" id="email" placeholder='Input your email' value={email} onChange={(e) => null} disabled />
            </div>
            <div>
            <button type="submit" className='bg-accent py-3 px-20 rounded-lg text-sm mb-3 text-primary' disabled={loading}>{loading ? "processing" : "submit"}</button>
            </div>
        </form>
    )
}

export default EditAdminForm