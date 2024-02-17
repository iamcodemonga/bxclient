"use client"

import { approveWithdrawal } from "@/actions";
import { useState } from "react";
import toast from "react-hot-toast";
import ApproveWithdrawalBtn from "../button/ApproveWithdrawalBtn";

const Withdrawals = ({ allwithdrawals }: { allwithdrawals: Array<{ id: number, investor: number, method: string, wallet: string, amount: number, fullname: string, date: string, approved: number }> }) => {

    const [ limit, setLimit ] = useState<number>(10)
    const [ searchedUsers, setSearchedUsers ] = useState<Array< { id: number, investor: number, method: string, wallet: string, amount: number, fullname: string, date: string, approved: number }> | []>([])
    const [ query, setQuery ] = useState<string>("")

    const handleLimit = async() => {
        if (limit > allwithdrawals.length) {
            return;
        }
        setLimit(prev => prev+2)
        return;
    }

    const handleApprove = async(id: number) => {
        const result = await approveWithdrawal({ id });
        if (result?.error) {
            toast.error(result?.error)
            return;
        }
        toast.success("You just approved this withdrawal!");
        return;
    }

    return (
        <section className='my-7 border border-accent rounded-2xl pt-10 pb-5 px-5'>
            <div className='lg:flex justify-between items-center mb-5'>
                <h3 className='text-3xl ml-3 mb-5 lg:mb-0'>Withdrawal Requests</h3>
                <input type="text" name="filter" id="filter" className='bg-slate-200 px-3 py-2 rounded-lg outline-accent w-full lg:w-80' placeholder='search users' value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>
            <div className='overflow-x-auto admin-table'>
                <table className='table-auto w-full'>
                    <thead className=''>
                        <tr className="border- border-accent">
                            <th className='p-3 whitespace-nowrap text-sm'>S/N</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Method</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Wallet Address</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Investor</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Amount</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Date</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Status</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {!query ? allwithdrawals.length > 0 ? allwithdrawals.slice(0, limit).map((withdrawals: { id: number, investor: number, method: string, wallet: string, amount: number, fullname: string, date: string, approved: number }, index: number) =>  <tr className='border-t border-accent' key={withdrawals.id}>
                            <td className='whitespace-nowrap p-3 text-center'>{index+1}</td>
                            <td className='whitespace-nowrap p-3 text-center'>{withdrawals.method}</td>
                            <td className='whitespace-nowrap p-3 text-center'>{withdrawals.wallet}</td>
                            <td className='whitespace-nowrap p-3 text-center'>{withdrawals.fullname}</td>
                            <td className='whitespace-nowrap p-3 text-center'>${withdrawals.amount.toLocaleString()}</td>
                            <td className='whitespace-nowrap p-3 text-center'>{withdrawals.date}</td>
                            <td className='whitespace-nowrap p-3 text-center'>
                                {withdrawals.approved == 0 ? <span className='bg-red-200/80 text-xs rounded-md font-bold py-1 px-3 text-red-500'>Pending</span>
                                : <span className='bg-green-200/80 text-xs rounded-md font-bold py-1 px-3 text-green-700'>Cleared</span>}
                            </td>
                            <td className='whitespace-nowrap p-3 text-center space-x-3'>
                                {withdrawals.approved == 0 ? <form action={async() => await handleApprove(withdrawals.id)} method=""><ApproveWithdrawalBtn /></form>
                                : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-500 block mx-auto">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                </svg>}
                            </td>
                        </tr>) 
                        : null
                        : null}
                        <tr className='border-t border-accent hidden'>
                            <td className='whitespace-nowrap p-3 text-center'>1</td>
                            <td className='whitespace-nowrap p-3 text-center'>Bitcoin</td>
                            <td className='whitespace-nowrap p-3 text-center'>jkhsiudfwy782fgut8gqwuy48724qg</td>
                            <td className='whitespace-nowrap p-3 text-center'>$2500</td>
                            <td className='whitespace-nowrap p-3 text-center'>20/2/2024</td>
                            <td className='whitespace-nowrap p-3 text-center'><span className='bg-red-200/80 text-xs rounded-md font-bold py-1 px-3 text-red-500'>Pending</span><span className='bg-green-200/80 text-xs rounded-md font-bold py-1 px-3 text-green-700 hidden'>Approved</span></td>
                            <td className='whitespace-nowrap p-3 text-center space-x-3'>
                                <button type="button" className='bg-green-500 text-xs rounded-md font-bold py-1 px-3 text-primary'>Sent</button>
                                <button type="button" className='bg-red-500 text-xs rounded-md font-bold py-1 px-3 text-primary hidde'>Declined</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {limit < allwithdrawals.length ? <button type="button" className="block mx-auto bg-accent px-5 py-1 rounded-lg mt-10 text-primary" onClick={handleLimit}>Load more</button> : null}
        </section>
    )
}

export default Withdrawals