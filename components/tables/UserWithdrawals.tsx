"use client"

import { useState } from "react"

const UserWithdrawals = ({ initial }: { initial: Array<{ id: number, investor: number, method: string, wallet: string, amount: number, date: string, approved: number }> }) => {

    const [ limit, setLimit ] = useState<number>(10)

    const handleLimit = async() => {
        if (limit > initial.length) {
            return;
        }
        setLimit(prev => prev+2)
        return;
    }

    return (
        <section className='my-7 border border-accent rounded-2xl pt-10 pb-5 px-5'>
            <div className='lg:flex justify-between items-center mb-5'>
                <h3 className='text-3xl ml-3 mb-5 lg:mb-0'>Withdrawal History</h3>
                {/* <input type="text" name="filter" id="filter" className='bg-slate-200 px-3 py-2 rounded-lg outline-accent w-full lg:w-80' placeholder='search records' value={''} /> */}
            </div>
            <div className='overflow-x-auto admin-table'>
                <table className='table-auto w-full'>
                    <thead className=''>
                        <tr className="border- border-accent">
                            <th className='p-3 whitespace-nowrap text-sm'>S/N</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Method</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Wallet Address</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Amount</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Date</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {initial.length > 0 ? initial.slice(0, limit).map((req, index) => <tr className='border-t border-accent' key={req.id}>
                            <td className='whitespace-nowrap p-3 text-center'>{index+1}</td>
                            <td className='whitespace-nowrap p-3 text-center'>{req.method}</td>
                            <td className='whitespace-nowrap p-3 text-center'>{req.wallet}</td>
                            <td className='whitespace-nowrap p-3 text-center'>${req.amount}</td>
                            <td className='whitespace-nowrap p-3 text-center'>{req.date}</td>
                            <td className='whitespace-nowrap p-3 text-center'>{req.approved == 0 ? <span className='bg-red-200/80 text-xs rounded-md font-bold py-1 px-3 text-red-500'>Pending</span> : <span className='bg-green-200/80 text-xs rounded-md font-bold py-1 px-3 text-green-700'>Approved</span>}</td>
                        </tr>)  : null}
                        <tr className='border-t border-accent hidden'>
                            <td className='whitespace-nowrap p-3 text-center'>2</td>
                            <td className='whitespace-nowrap p-3 text-center'>Bitcoin</td>
                            <td className='whitespace-nowrap p-3 text-center'>jkhsiudfwy782fgut8gqwuy48724qg</td>
                            <td className='whitespace-nowrap p-3 text-center'>$2500</td>
                            <td className='whitespace-nowrap p-3 text-center'>20/2/2024</td>
                            <td className='whitespace-nowrap p-3 text-center'><span className='bg-red-200/80 text-xs rounded-md font-bold py-1 px-3 text-red-500'>Pending</span><span className='bg-green-200/80 text-xs rounded-md font-bold py-1 px-3 text-green-700 hidden'>Approved</span></td>
                        </tr>
                        <tr className='border-t border-accent hidden'>
                            <td className='whitespace-nowrap p-3 text-center'>3</td>
                            <td className='whitespace-nowrap p-3 text-center'>USDT</td>
                            <td className='whitespace-nowrap p-3 text-center'>jkhsiudfwy782fgut8gqwuy48724qg</td>
                            <td className='whitespace-nowrap p-3 text-center'>$2500</td>
                            <td className='whitespace-nowrap p-3 text-center'>20/2/2024</td>
                            <td className='whitespace-nowrap p-3 text-center'><span className='bg-red-200/80 text-xs rounded-md font-bold py-1 px-3 text-red-500 hidden'>Pending</span><span className='bg-green-200/80 text-xs rounded-md font-bold py-1 px-3 text-green-700 hidde'>Approved</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {limit < initial.length ? <button type="button" className="block mx-auto bg-accent px-5 py-1 rounded-lg mt-10 text-primary" onClick={handleLimit}>Load more</button> : null}
        </section>
    )
}

export default UserWithdrawals