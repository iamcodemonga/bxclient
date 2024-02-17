"use client"

import { approveDeposits } from "@/actions";
import { useState } from "react";
import toast from "react-hot-toast";
import ApproveDepositBtn from "../button/ApproveDepositBtn";

const Deposits = ({ alldeposits }: { alldeposits: { id: number, package: string, method: string, amount: number, validity: number, remaining: number, investor: number, fullname: string, paydate: string, duedate: string, approved: number}[]}) => {

    const [ limit, setLimit ] = useState<number>(10)
    const [ searchedUsers, setSearchedUsers ] = useState<Array< { id: number, package: string, method: string, amount: number, validity: number, remaining: number, investor: number, fullname: string, paydate: string, duedate: string, approved: number}> | []>([])
    const [ query, setQuery ] = useState<string>("")

    const handleApprove = async(id: number) => {
        const result = await approveDeposits({ id });
        if (result?.error) {
            toast.error(result?.error)
            return;
        }
        toast.success("You just approved this withdrawal!");
        return;
    }

    const handleLimit = async() => {
        if (limit > alldeposits.length) {
            return;
        }
        setLimit(prev => prev+2)
        return;
    }

    return (
        <section className='my-7 border border-accent rounded-2xl pt-10 pb-5 px-5'>
            <div className='lg:flex justify-between items-center mb-5'>
                <h3 className='text-3xl ml-3 mb-5 lg:mb-0'>All Deposits</h3>
                <input type="text" name="filter" id="filter" className='bg-slate-200 px-3 py-2 rounded-lg outline-accent w-full lg:w-80' placeholder='search users' value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>
            <div className='overflow-x-auto admin-table'>
                <table className='table-auto w-full'>
                    <thead className=''>
                        <tr className="border- border-accent">
                            <th className='p-3 whitespace-nowrap text-sm'>S/N</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Investment Plan</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Investor</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Method</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Amount</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Investment Date</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Due Date</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Status</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!query ? alldeposits.length > 0 ? alldeposits.slice(0, limit).map((deposit: { id: number, package: string, method: string, amount: number, validity: number, remaining: number, investor: number, fullname: string, paydate: string, duedate: string, approved: number}, index: number) =>  <tr className='border-t border-accent' key={deposit.id}>
                            <td className='whitespace-nowrap p-3 text-center'>{index+1}</td>
                            <td className='whitespace-nowrap p-3 text-center'>{deposit.package}</td>
                            <td className='whitespace-nowrap p-3 text-center'>{deposit.fullname}</td>
                            <td className='whitespace-nowrap p-3 text-center'>{deposit.method}</td>
                            <td className='whitespace-nowrap p-3 text-center'>${deposit.amount.toLocaleString()}</td>
                            <td className='whitespace-nowrap p-3 text-center'>{deposit.paydate}</td>
                            <td className='whitespace-nowrap p-3 text-center'>{deposit.duedate}</td>
                            <td className='whitespace-nowrap p-3 text-center'>
                                {deposit.approved == 0 ? <span className='bg-red-200/80 text-xs rounded-md font-bold py-1 px-3 text-red-500'>Pending</span>
                                : <span className='bg-green-200/80 text-xs rounded-md font-bold py-1 px-3 text-green-700'>Verified</span>}
                            </td>
                            <td className='whitespace-nowrap p-3 text-center space-x-3'>
                                {deposit.approved == 0 ? <form action={async() => await handleApprove(deposit.id)} method=""><ApproveDepositBtn /></form>
                                : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-500 block mx-auto">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                </svg>}
                            </td>
                        </tr>) 
                        : null
                        : null}
                        <tr className='border-t border-accent hidden'>
                            <td className='whitespace-nowrap p-3 text-center'>1</td>
                            <td className='whitespace-nowrap p-3 text-center'>Estate</td>
                            <td className='whitespace-nowrap p-3 text-center'>Ethereum</td>
                            <td className='whitespace-nowrap p-3 text-center'>$20,000</td>
                            <td className='whitespace-nowrap p-3 text-center'>12/2/2024</td>
                            <td className='whitespace-nowrap p-3 text-center'>12/3/2024</td>
                            <td className='whitespace-nowrap p-3 text-center'><span className='bg-red-200/80 text-xs rounded-md font-bold py-1 px-3 text-red-500'>Pending</span><span className='bg-green-200/80 text-xs rounded-md font-bold py-1 px-3 text-green-700 hidden'>Approved</span></td>
                            <td className='whitespace-nowrap p-3 text-center space-x-3'>
                                <button type="button" className='bg-green-500 text-xs rounded-md font-bold py-1 px-3 text-primary'>Approve</button>
                                <button type="button" className='bg-red-500 text-xs rounded-md font-bold py-1 px-3 text-primary hidde'>Decline</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {limit < alldeposits.length ? <button type="button" className="block mx-auto bg-accent px-5 py-1 rounded-lg mt-10 text-primary" onClick={handleLimit}>Load more</button> : null}
        </section>
    )
}

export default Deposits