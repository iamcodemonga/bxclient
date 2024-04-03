"use client"

import { useState } from "react";

const Referrals = ({ allbonuses }: { allbonuses: { id: number, fullname: string, amount: number, refdate: string }[]}) => {

    const [ limit, setLimit ] = useState<number>(10)

    const handleLimit = async() => {
        if (limit > allbonuses.length) {
            return;
        }
        setLimit(prev => prev+10)
        return;
    }

    return (
        <section className='my-7 border border-accent rounded-2xl pt-10 pb-5 px-5'>
            <div className='lg:flex justify-between items-center mb-5'>
                <h3 className='text-3xl ml-3 mb-5 lg:mb-0'>Earned Referral Bonus</h3>
                {/* <input type="text" name="filter" id="filter" className='bg-slate-200 px-3 py-2 rounded-lg outline-accent w-full lg:w-80' placeholder='search referrals' value={''} /> */}
            </div>
            <div className='overflow-x-auto admin-table'>
                <table className='table-auto w-full'>
                    <thead className=''>
                        <tr className="border- border-accent">
                            <th className='p-3 whitespace-nowrap text-sm'>S/N</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Name</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Invested Amount</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Your Bonus</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allbonuses.length > 0 ? allbonuses.slice(0, 10).map((bonus: { id: number, fullname: string, amount: number, refdate: string }, index: number) => <tr className='border-t border-accent' key={index}>
                            <td className='whitespace-nowrap p-3 text-center'>{index+1}</td>
                            <td className='whitespace-nowrap p-3 text-center'>{bonus.fullname}</td>
                            <td className='whitespace-nowrap p-3 text-center'>${bonus.amount*10}</td>
                            <td className='whitespace-nowrap p-3 text-center'>${bonus.amount}</td>
                            <td className='whitespace-nowrap p-3 text-center'>{bonus.refdate}</td>
                        </tr>)  : null}
                        <tr className='border-t border-accent hidden'>
                            <td className='whitespace-nowrap p-3 text-center'>2</td>
                            <td className='whitespace-nowrap p-3 text-center'>yin whang</td>
                            <td className='whitespace-nowrap p-3 text-center'>$20,000</td>
                            <td className='whitespace-nowrap p-3 text-center'>$2000</td>
                            <td className='whitespace-nowrap p-3 text-center'>20/2/2024</td>
                        </tr>
                        <tr className='border-t border-accent hidden'>
                            <td className='whitespace-nowrap p-3 text-center'>3</td>
                            <td className='whitespace-nowrap p-3 text-center'>kelvin dave</td>
                            <td className='whitespace-nowrap p-3 text-center'>$20,000</td>
                            <td className='whitespace-nowrap p-3 text-center'>$2000</td>
                            <td className='whitespace-nowrap p-3 text-center'>20/2/2024</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {limit < allbonuses.length ? <button type="button" className="block mx-auto bg-accent px-5 py-1 rounded-lg mt-10 text-primary" onClick={handleLimit}>Load more</button> : null}
        </section>
    )
}

export default Referrals