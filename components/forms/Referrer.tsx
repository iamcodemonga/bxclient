"use client"

import copy from 'clipboard-copy'
import { useState } from 'react'

const ReferrerForm = ({ username }: { username: string }) => {

    const [ copied, setCopied ] = useState<boolean>(false)

    const handleCopy = async(text: string) => {
        setCopied(true)
        await copy(text)
        setTimeout(() => {
            setCopied(false)
        }, 1500);
        return;
    }
    
    return (
        <form action="" method="post" className='border border-accent rounded-xl px-3 lg:px-10 py-7 lg:py-10 space-y-6'>
            <h1 className="text-3xl">Refer and Earn</h1>
            <div className='space-y-1'>
                <label htmlFor="" className='text-sm text-slate-500'>Referral Link</label>
                <div className='flex items-center'>
                    <input type="text" name="" id="" className='w-full px-4 py-2 bg-slate-200 rounded-tl-lg rounded-bl-lg outline-none' placeholder='Enter wallet address' disabled value={`https://botexfinance.com/register?ref=${username}`} />
                    <button type="button" className='pr-4 py-2 bg-slate-200 rounded-tr-lg rounded-br-lg text-accent font-bold' onClick={() => handleCopy(`https://botexfinance.com/register?ref=${username}`)}>{copied ? "copied" : "copy"}</button>
                </div>
            </div>
        </form>
    )
}

export default ReferrerForm