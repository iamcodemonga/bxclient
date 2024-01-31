"use client"

const Referrals = () => {
    return (
        <section className='my-7 border border-accent rounded-2xl pt-10 pb-5 px-5'>
            <div className='lg:flex justify-between items-center mb-5'>
                <h3 className='text-3xl ml-3 mb-5 lg:mb-0'>Referral Lists</h3>
                <input type="text" name="filter" id="filter" className='bg-slate-200 px-3 py-2 rounded-lg outline-accent w-full lg:w-80' placeholder='search referrals' value={''} />
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
                        <tr className='border-t border-accent'>
                            <td className='whitespace-nowrap p-3 text-center'>1</td>
                            <td className='whitespace-nowrap p-3 text-center'>Benjamin pavard</td>
                            <td className='whitespace-nowrap p-3 text-center'>$20,000</td>
                            <td className='whitespace-nowrap p-3 text-center'>$2000</td>
                            <td className='whitespace-nowrap p-3 text-center'>20/2/2024</td>
                        </tr>
                        <tr className='border-t border-accent'>
                            <td className='whitespace-nowrap p-3 text-center'>2</td>
                            <td className='whitespace-nowrap p-3 text-center'>yin whang</td>
                            <td className='whitespace-nowrap p-3 text-center'>$20,000</td>
                            <td className='whitespace-nowrap p-3 text-center'>$2000</td>
                            <td className='whitespace-nowrap p-3 text-center'>20/2/2024</td>
                        </tr>
                        <tr className='border-t border-accent'>
                            <td className='whitespace-nowrap p-3 text-center'>3</td>
                            <td className='whitespace-nowrap p-3 text-center'>kelvin dave</td>
                            <td className='whitespace-nowrap p-3 text-center'>$20,000</td>
                            <td className='whitespace-nowrap p-3 text-center'>$2000</td>
                            <td className='whitespace-nowrap p-3 text-center'>20/2/2024</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button type="button" className="block mx-auto bg-accent px-5 py-1 rounded-lg mt-10 text-primary">Load more</button>
        </section>
    )
}

export default Referrals