"use client"

const Deposits = () => {
    return (
        <section className='my-7 border border-accent rounded-2xl pt-10 pb-5 px-5'>
            <div className='lg:flex justify-between items-center mb-5'>
                <h3 className='text-3xl ml-3 mb-5 lg:mb-0'>All Deposits</h3>
                <input type="text" name="filter" id="filter" className='bg-slate-200 px-3 py-2 rounded-lg outline-accent w-full lg:w-80' placeholder='search users' value={''} />
            </div>
            <div className='overflow-x-auto admin-table'>
                <table className='table-auto w-full'>
                    <thead className=''>
                        <tr className="border- border-accent">
                            <th className='p-3 whitespace-nowrap text-sm'>S/N</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Investment Plan</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Method</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Amount</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Date</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Due Date</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Status</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-t border-accent'>
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
            <button type="button" className="block mx-auto bg-accent px-5 py-1 rounded-lg mt-10 text-primary">Load more</button>
        </section>
    )
}

export default Deposits