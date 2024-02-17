"use client"

import { useState } from "react"
import BalanceModal from "../popups/Balance"

const UsersTable = ({ allusers }: { allusers: { id: number, fullname: string, username: string, email: string, referrer: number, balance: number, profitbalance: number}[]}) => {

    const [ limit, setLimit ] = useState<number>(10)
    const [ searchedUsers, setSearchedUsers ] = useState<Array< {id: number, fullname: string, username: string, email: string, referrer: number, balance: number, profitbalance: number}> | []>([])
    const [ query, setQuery ] = useState<string>("")
    const [ balance, setBalance ] = useState<string>("")
    const [ profit, setProfit ] = useState<string>("")
    const [ activeid, setActiveId ] = useState<number>(0)

    const [ visible, setVisible ] = useState<boolean>(false)

    const handleLimit = async() => {
        if (limit > allusers.length) {
            return;
        }
        setLimit(prev => prev+2)
        return;
    }

    const handleShow = async(userid: number, userbalance: string, userprofit: string) => {
        console.log(balance)
        setActiveId(userid)
        setBalance(userbalance)
        setProfit(userprofit)
        setVisible(true)
        return;
    }

    const handleHide = () => {
        setVisible(false)
        return;
    }

    const handleBalance = (value: string) => {
        setBalance(value)
        return;
    }

    const handleProfit = (value: string) => {
        setProfit(value)
        return;
    }

    return (
        <section className='my-7 border border-accent rounded-2xl pt-10 pb-5 px-5'>
            <BalanceModal visible={visible} balance={balance} profit={profit} userid={activeid} hide={handleHide} changeBal={(value: string) => setBalance(value)} changeProfit={(value: string) => setProfit(value)} />
            <div className='lg:flex justify-between items-center mb-5'>
                <h3 className='text-3xl ml-3 mb-5 lg:mb-0'>All Users</h3>
                <input type="text" name="filter" id="filter" className='bg-slate-200 px-3 py-2 rounded-lg outline-accent w-full lg:w-80' placeholder='search users' value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>
            <div className='overflow-x-auto admin-table'>
                <table className='table-auto w-full'>
                    <thead className=''>
                        <tr className="border- border-accent">
                            <th className='p-3 whitespace-nowrap text-sm'>S/N</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Fullname</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Username</th>
                            <th className='p-3 whitespace-nowrap text-sm'>E-mail</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Investments</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Profit Balance</th>
                            <th className='p-3 whitespace-nowrap text-sm'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!query ? allusers.length > 0 ? allusers.slice(0, 10).map((user: { id: number, fullname: string, username: string, email: string, referrer: number, balance: number, profitbalance: number}, index: number) =>  <tr className='border-t border-accent' key={index}>
                            <td className='whitespace-nowrap p-3 text-center'>{index+1}</td>
                            <td className='whitespace-nowrap p-3 text-center'>{user.fullname}</td>
                            <td className='whitespace-nowrap p-3 text-center'>{user.username}</td>
                            <td className='whitespace-nowrap p-3 text-center'>{user.email}</td>
                            <td className={`whitespace-nowrap p-3 text-center ${user.balance < 1 ? "text-red-700" : "text-green-700" }`}>${user.balance.toLocaleString()}</td>
                            <td className={`whitespace-nowrap p-3 text-center ${user.profitbalance < 1 ? "text-red-700" : "text-green-700" }`}>${user.profitbalance.toLocaleString()}</td>
                            <td className='whitespace-nowrap p-3 text-center space-x-3'>
                                <button type="button" className='bg-blue-500 text-xs rounded-md font-bold py-1 px-3 text-primary' onClick={() => handleShow( user.id, user.balance.toString(), user.profitbalance.toString() )}>Edit Balance</button>
                            </td>
                        </tr>) 
                        : null
                        : null}
                        <tr className='border-t border-accent hidden'>
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
            {limit < allusers.length ? <button type="button" className="block mx-auto bg-accent px-5 py-1 rounded-lg mt-10 text-primary" onClick={handleLimit}>Load more</button> : null}
        </section>
    )
}

export default UsersTable