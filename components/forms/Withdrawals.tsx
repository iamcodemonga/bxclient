"use client"

import { FormEvent, useState } from "react"
import toast from "react-hot-toast"
import { placeRequest } from "@/actions"
import WithdrawalRequestBtn from "../button/WithdrawalRequestBtn"

const WithdrawalsForm = ({ profit, userid }: { profit: number, userid: number }) => {

    const allowedMethods = [ "bitcoin", "ethereum", "USDT", "BNB" ];
    const [ method, setMethod ] = useState<string>("bitcoin");
    const [ amount, setAmount ] = useState<string>("");
    const [ wallet, setWallet ] = useState<string>("");

    // const handleSubmit = async(e: FormEvent) => {
    const handleSubmit = async() => {

        const result = await placeRequest({ wallet, method, amount, userid});
        if (result?.error) {
            toast.error(result?.error)
            return;
        }
        toast.success("Your request was successful!");
        setAmount("");
        setWallet("");
        return;

        // if (!method || !amount || !wallet) {
        //     toast.error("please, fill in all fields!")
        //     return;
        // }

        // if (Number(amount) <= 0) {
        //     toast.error("You can't withdraw nothing!")
        //     return;
        // }

        // if (Number(amount) > profit) {
        //     toast.error(`You can't withdraw more than $${profit}!`)
        //     return;
        // }

        // try {
        //     const { data } = await axios.post(`${api}/withdrawals/request/${userid}`, { wallet, method, amount })
        //     if (data.error) {
        //         toast.error(data.message)
        //         return;
        //     }
        //     toast.success(data.message)
        //     setAmount("")
        //     setWallet("")
        //     return;
        // } catch (error) {
        //     console.log(error)
        // }
        
    }

    return (
        // <form action="" onSubmit={(e) => handleSubmit(e)} method="post" className='border border-accent rounded-xl px-3 lg:px-10 py-7 lg:py-10 space-y-6'>
        <form action={async () => {
            await handleSubmit()
        }} method="post" className='border border-accent rounded-xl px-3 lg:px-10 py-7 lg:py-10 space-y-6'>
            <h1 className="text-3xl">Withdraw Profit</h1>
            <div className='space-y-1'>
                <label htmlFor="" className='text-sm text-slate-500'>Preferred Method</label>
                <select name="" id="" value={method} onChange={(e) => setMethod(e.target.value)} className='w-full px-4 py-2 bg-slate-200 rounded-lg outline-accent'>
                    {allowedMethods.map((currency: string, index: number) => <option key={index} value={currency}>{currency}</option>)}
                </select>
            </div>
            <div className='space-y-1'>
                <label htmlFor="" className='text-sm text-slate-500'>Withdrawal Amount</label>
                <input type="number" name="" id="" className='w-full px-4 py-2 bg-slate-200 rounded-lg outline-accent' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='0.00' />
            </div>
            <div className='space-y-1'>
                <label htmlFor="" className='text-sm text-slate-500'>Wallet Address</label>
                <input type="text" name="" id="" className='w-full px-4 py-2 bg-slate-200 rounded-lg outline-accent' value={wallet} onChange={(e) => setWallet(e.target.value)} placeholder='Enter wallet address' />
            </div>
            <WithdrawalRequestBtn />
        </form>
    )
}

export default WithdrawalsForm