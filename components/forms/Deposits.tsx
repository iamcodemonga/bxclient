"use client"

import { FormEvent, useState } from "react"
import toast from "react-hot-toast"
import axios from "axios"
import { addDeposit } from "@/actions"
import Success from "../popups/Success"
import DepositRequestBtn from "../button/DepositRequestBtn"

const DepositsForm = ({ userid, email, username }: { userid: number, email: string, username: string }) => {

    const allowedMethods = [ "bitcoin", "ethereum", "USDT", "BNB" ];
    const allowedPlans = [ "starter", "basic", "advanced", "long term" ];
    const [ plan, setPlan ] = useState<string>("starter");
    const [ method, setMethod ] = useState<string>("bitcoin");
    const [ amount, setAmount ] = useState<string>("");
    const [ visible, setVisibility ] = useState<boolean>(false)
    const [ loading, setLoading ] = useState<boolean>(false)

        // const handleSubmit = async(e: FormEvent) => {
    const handleSubmit = async() => {
        setLoading(true)
        const result = await addDeposit({ email, username, plan, method, amount, userid});
        if (result?.error) {
            toast.error(result?.error)
            setLoading(false)
            return;
        }
        setLoading(false)
        setVisibility(true);
        toast.success("Your request was successful!");
        // setPlan("starter");
        // setMethod("bitcoin");
        // setAmount("");
        // setWallet("");
        return;
    }

    const handleHide = () => {
        setVisibility(false);
        setPlan("starter");
        setMethod("bitcoin");
        setAmount("");
        return;
    }

    return (
        <>
            <Success visible={visible} plan={plan} method={method} close={handleHide} />
            <form action={async () => {
                await handleSubmit()
            }} method="post" className='border border-accent rounded-xl px-3 lg:px-10 py-7 lg:py-10 space-y-6'>
                <h1 className="text-3xl">Deposit Funds</h1>
                <div className='space-y-1'>
                    <label htmlFor="" className='text-sm text-slate-500'>Investment Plan</label>
                    <select name="" value={plan} onChange={(e) => setPlan(e.target.value)} id="" className='w-full px-4 py-2 bg-slate-200 rounded-lg outline-accent'>
                        {allowedPlans.map((invest: string, index: number) => <option key={index} value={invest}>{invest}</option>)}
                    </select>
                </div>
                <div className='space-y-1'>
                    <label htmlFor="" className='text-sm text-slate-500'>Payment Method</label>
                    <select name="" id="" value={method} onChange={(e) => setMethod(e.target.value)} className='w-full px-4 py-2 bg-slate-200 rounded-lg outline-accent'>
                        {allowedMethods.map((currency: string, index: number) => <option key={index} value={currency}>{currency}</option>)}
                    </select>
                </div>
                <div className='space-y-1'>
                    <label htmlFor="" className='text-sm text-slate-500'>Invest Amount</label>
                    <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" name="" id="" className='w-full px-4 py-2 bg-slate-200 rounded-lg outline-accent' placeholder='0.00' disabled={loading} />
                </div>
                <DepositRequestBtn />
            </form>
        </>
    )
}

export default DepositsForm