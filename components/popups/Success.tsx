import React from 'react'

const Success = () => {
    return (
        <section className="w-full h-screen z-50 fixed top-0 left 0 bg-secondary/80 px-5 lg:px-0 flex justify-center items-center">
            <div className="px-5 py-7 lg:px-10 lg:py-10 bg-primary w-full lg:w-1/3 rounded-xl whitebgimg">
                <div className="mx-auto w-full mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-32 h-32 text-green-500 mx-auto">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                    </svg>
                </div>
                <h1 className='text-center mb-4'>Copy and deposit into the wallet address below to complete your transaction.</h1>
                <div className='mb-7'>
                    <label htmlFor="" className='text-sm text-slate-500'>Bitcoin wallet</label>
                    <div className='flex items-center'>
                        <input type="text" name="" id="" className='w-full px-4 py-2 bg-slate-200 rounded-tl-lg rounded-bl-lg outline-none' placeholder='Enter wallet address' disabled value={`xhg5f6gfwyft84fgwf87fu4fyu38`} />
                        <button type="button" className='pr-4 py-2 bg-slate-200 rounded-tr-lg rounded-br-lg text-accent font-bold'>copy</button>
                    </div>
                </div>
                <button type="button" className='block ml-auto px-5 py-1 rounded-full bg-secondary text-base text-primary'>Done</button>
            </div>
        </section>
    )
}

export default Success