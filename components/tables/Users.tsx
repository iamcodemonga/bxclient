"use client"

const UsersTable = () => {
    return (
        <section className='my-7 border border-accent rounded-2xl pt-10 pb-5 px-5'>
            <div className='lg:flex justify-between items-center mb-5'>
                <h3 className='text-3xl ml-3 mb-5 lg:mb-0'>All Users</h3>
                <input type="text" name="filter" id="filter" className='bg-slate-200 px-3 py-2 rounded-lg outline-accent w-full lg:w-80' placeholder='search users' value={''} />
            </div>
            <div className='overflow-x-auto admin-table'>
                <table className='table-auto w-full'>
                    <thead className=''>
                        <tr className="border- border-accent">
                            <th className='p-3 whitespace-nowrap text-sm'>S/N</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Fullname</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Username</th>
                            <th className='p-3 whitespace-nowrap text-sm'>E-mail</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Balance</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Pasword</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-t border-accent'>
                            <td className='whitespace-nowrap p-3 text-center'>1</td>
                            <td className='whitespace-nowrap p-3 text-center'>Bala blue</td>
                            <td className='whitespace-nowrap p-3 text-center'>bb268</td>
                            <td className='whitespace-nowrap p-3 text-center'>bb@gmail.com</td>
                            <td className='whitespace-nowrap p-3 text-center text-green-700'>$10,000</td>
                            <td className='whitespace-nowrap p-3 text-center'>12345</td>
                            <td className='whitespace-nowrap p-3 text-center space-x-3'>
                                <button type="button" className='bg-blue-500 text-xs rounded-md font-bold py-1 px-3 text-primary'>Edit</button>
                                <button type="button" className='bg-red-500 text-xs rounded-md font-bold py-1 px-3 text-primary hidde'>Delete</button>
                            </td>
                        </tr>
                        <tr className='border-t border-accent'>
                            <td className='whitespace-nowrap p-3 text-center'>2</td>
                            <td className='whitespace-nowrap p-3 text-center'>hann kross</td>
                            <td className='whitespace-nowrap p-3 text-center'>hk</td>
                            <td className='whitespace-nowrap p-3 text-center'>hk@gmail.com</td>
                            <td className='whitespace-nowrap p-3 text-center text-red-700'>$0</td>
                            <td className='whitespace-nowrap p-3 text-center'>12345</td>
                            <td className='whitespace-nowrap p-3 text-center space-x-3'>
                                <button type="button" className='bg-blue-500 text-xs rounded-md font-bold py-1 px-3 text-primary'>Edit</button>
                                <button type="button" className='bg-red-500 text-xs rounded-md font-bold py-1 px-3 text-primary hidde'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button type="button" className="block mx-auto bg-accent px-5 py-1 rounded-lg mt-10 text-primary">Load more</button>
        </section>
    )
}

export default UsersTable