"use client"

import { FormEvent, useState } from "react"
import toast from "react-hot-toast"
import axios from "axios"

const AdminPasswordForm = ({ userid }: { userid: number }) => {

    const [ oldpassword, setOldpassword ] = useState<string>("");
    const [ newpassword, setNewpassword ] = useState<string>("");
    const [ confirmedpassword, setConfirmedpassword ] = useState<string>("");
    const [ showold, setShowold ] = useState<boolean>(false)
    const [ shownew, setShownew ] = useState<boolean>(false)
    const [ showconfirmed, setShowconfirmed ] = useState<boolean>(false)
    const api = process.env.NEXT_PUBLIC_API_ROOT;

    const handleSubmit = async(e: FormEvent) => {
        e.preventDefault();

        try {
            const { data } = await axios.put(`${api}/password?id=${userid}`, { oldpassword, newpassword, confirmedpassword })
            if (data.error) {
                toast.error(data.message)
                return;
            }
            toast.success(data.message)
            setOldpassword("");
            setNewpassword("");
            setConfirmedpassword("");
            return;
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form action="" onSubmit={(e) => handleSubmit(e)} method="post" className='space-y-5 w-full'>
            <h4 className='mb-10 mt-5 lg:mt-0 text-2xl text-center'>Change Password</h4>
            <div className='flex flex-col rounded-xl'>
                <label htmlFor="current" className='text-slate-500 text-sm'>Old Password</label>
                <div className="flex items-center">
                    <input className='bg-slate-200 py-2 px-3 outline-none rounded-tl-lg rounded-bl-lg w-full' type={showold ? "text" : "password"} name="old" id="old" placeholder='xxxxxxxxxx' value={oldpassword} onChange={(e) => setOldpassword(e.target.value)} />
                    <button type="button" className='py-2 pr-3 rounded-tr-lg rounded-br-lg bg-slate-200 text-accent' onClick={(e) => setShowold(!showold)}>{showold ? "Hide" : "Show"}</button>
                </div>
            </div>
            <div className='flex flex-col rounded-xl'>
                <label htmlFor="current" className='text-slate-500 text-sm'>New Password</label>
                <div className="flex items-center">
                    <input className='bg-slate-200 py-2 px-3 outline-none rounded-tl-lg rounded-bl-lg w-full' type={shownew ? "text" : "password"} name="new" id="new" placeholder='xxxxxxxxxx' value={newpassword} onChange={(e) => setNewpassword(e.target.value)} />
                    <button type="button" className='py-2 pr-3 rounded-tr-lg rounded-br-lg bg-slate-200 text-accent' onClick={(e) => setShownew(!shownew)}>{shownew ? "Hide" : "Show"}</button>
                </div>
            </div>
            <div className='flex flex-col rounded-xl'>
                <label htmlFor="current" className='text-slate-500 text-sm'>confirm Password</label>
                <div className="flex items-center">
                    <input className='bg-slate-200 py-2 px-3 outline-none rounded-tl-lg rounded-bl-lg w-full' type={showconfirmed ? "text" : "password"} name="confirm" id="confirm" placeholder='xxxxxxxxxx' value={confirmedpassword} onChange={(e) => setConfirmedpassword(e.target.value)} />
                    <button type="button" className='py-2 pr-3 rounded-tr-lg rounded-br-lg bg-slate-200 text-accent' onClick={(e) => setShowconfirmed(!showconfirmed)}>{showconfirmed ? "Hide" : "Show"}</button>
                </div>
            </div>
            <div>
            <button type="submit" className='bg-accent py-3 px-20 rounded-lg text-sm mb-3 text-primary'>submit</button>
            </div>
        </form>
    )
}

export default AdminPasswordForm