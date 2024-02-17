"use client"

import { updateUserBalance } from '@/actions';
import toast from 'react-hot-toast';
import EditBalBtn from '../button/EditBalBtn';

const BalanceModal = ({ visible, balance, profit, userid, hide, changeBal, changeProfit }: { visible: boolean, balance: string, profit: string, userid: number, hide: () => void, changeBal: (value: string) => void, changeProfit: (value: string) => void }) => {

    const hidden = visible ? "flex" : "hidden";

    const hidemodal = (e: any) => {
        if (e.target.id == "modal") {
            hide()
            return;
        }
    }

    const handleSubmit = async() => {

        if (balance == "") {
            toast.error("Balance cannot be empty")
            return;
        }

        if (profit == "") {
            toast.error("Profit balance cannot be empty")
            return;
        }

        const result = await updateUserBalance({ balance, profit, userid});
        if (result?.error) {
            toast.error(result?.error)
            return;
        }
        toast.success("Your request was successful!");
        hide()
        return;
    }

    return (
        <section className={`w-full h-screen z-100 fixed top-0 left-0 bg-secondary/80 px-5 lg:px-0 ${hidden} justify-center items-center`} id='modal' onClick={(e) => hidemodal(e)}>
        <div className="px-5 py-7 lg:px-10 lg:py-10 bg-primary w-full lg:w-1/3 rounded-xl whitebgimg">
            <h1 className='text-center text-3xl mb-10'>Edit User Balance</h1>
                <form action={async () => {
                    await handleSubmit()
                    }}  method="post" className='space-y-7 w-full' >
                    <div className='flex flex-col rounded-xl'>
                        <label htmlFor="current" className='text-slate-500 text-sm'>Investment Balance</label>
                        <input className='bg-slate-200 py-2 px-3 outline-none rounded-lg' type="text" name="balancee" id="balance" placeholder='Input new balance' value={balance == "0" ? "" : balance} onChange={(e) => changeBal(e.target.value)} />
                    </div>
                    <div className='flex flex-col rounded-xl'>
                        <label htmlFor="current" className='text-slate-500 text-sm'>Profit balance</label>
                        <input className='bg-slate-200 py-2 px-3 outline-none rounded-lg' type="number" name="profit" id="profit" placeholder='Input new profit' value={profit == "0" ? "" : profit} onChange={(e) => changeProfit(e.target.value)} />
                    </div>
                    <div>
                        <EditBalBtn />
                    </div>
                </form>
        </div>
    </section>
    )
}

export default BalanceModal