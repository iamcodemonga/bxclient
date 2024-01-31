import React from 'react'

const DepositPopup = () => {
    return (
        <section className="w-full h-screen z-50 fixed top-0 left 0 bg-secondary/80 px-5 lg:px-0 flex justify-center items-center">
            <div className="px-5 py-10 lg:px-10 lg:py-10 bg-primary w-full lg:w-1/3 rounded-xl whitebgimg">
                <form action="" method="post" className='space-y-6'>
                    <h1 className="text-2xl">Deposit Funds</h1>
                    <div className='space-y-1'>
                        <label htmlFor="" className='text-sm text-slate-500'>Investment Plan</label>
                        <select name="" id="" className='w-full px-4 py-2 bg-slate-200 rounded-lg outline-accent' disabled>
                            <option value="">Starter Plan</option>
                            <option value="">Duplex</option>
                            <option value="">Estate</option>
                            <option value="">Elite</option>
                        </select>
                    </div>
                    <div className='space-y-1'>
                        <label htmlFor="" className='text-sm text-slate-500'>Payment Method</label>
                        <select name="" id="" className='w-full px-4 py-2 bg-slate-200 rounded-lg outline-accent'>
                            <option value="">Bitcoin</option>
                            <option value="">Ethereum</option>
                            <option value="">USDT</option>
                            <option value="">BUSD</option>
                        </select>
                    </div>
                    <div className='space-y-1'>
                        <label htmlFor="" className='text-sm text-slate-500'>Invest Amount</label>
                        <input type="number" name="" id="" className='w-full px-4 py-2 bg-slate-200 rounded-lg outline-accent' placeholder='0.00' />
                    </div>
                    <button type="submit" className='bg-accent px-10 py-2 rounded-lg text-primary'>Submit</button>
                </form>
            </div>
        </section>
    )
}

export default DepositPopup