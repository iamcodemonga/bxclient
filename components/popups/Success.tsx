"use client"

import { useState } from 'react'
import copy from 'clipboard-copy'

const Success = ({ visible, plan, method, close }: { visible: boolean, plan: string, method: string; close: ()=> void }) => {

    const payments = [
        { type: "bitcoin", wallet: "bc1qyxytsrrs6fn7ksqy9p8n7p4a9w5fvwa9au8ez6" },
        { type: "ethereum", wallet: "0x3ca0c67631BA38c6a2FFB0b8E55C59144e7fa07D" },
        { type: "USDT", wallet: "TKtMjyhGfzNToVzdsLycU6ErvXNETPwBHt" },
        { type: "BNB", wallet: "0x3ca0c67631BA38c6a2FFB0b8E55C59144e7fa07D" }
    ]

    const hide = visible ? "flex" : "hidden";
    const wallet = (method == "bitcoin" ? payments[0].wallet: method == "ethereum" ? payments[1].wallet: method == "USDT" ? payments[2].wallet: method == "BNB" ? payments[3].wallet : "00xxxxxxxxxxxxxxxxxxxxxxx")

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
        <section className={`w-full h-screen z-100 fixed top-0 left-0 bg-secondary/80 px-5 lg:px-0 ${hide} justify-center items-center`}>
            <div className="px-5 py-7 lg:px-10 lg:py-10 bg-primary w-full lg:w-1/3 rounded-xl whitebgimg">
                <div className="mx-auto w-full mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-32 h-32 text-green-500 mx-auto">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                    </svg>
                </div>
                <h1 className='text-center mb-4'>Copy and deposit into the wallet address below to complete your transaction.</h1>
                <div className='mb-7'>
                    <label htmlFor="" className='text-sm text-slate-500'>{method == "bitcoin" ? "Bitcoin ": method == "ethereum" ? "Ethereum ": method == "USDT" ? "USDT ": method == "BNB" ? "BNB " : null}address</label>
                    <div className='flex items-center'>
                        <input type="text" name="" id="" className='w-full px-4 py-2 bg-slate-200 rounded-tl-lg rounded-bl-lg outline-none' placeholder='Enter wallet address' disabled value={wallet} />
                        <button type="button" className='pr-4 py-2 bg-slate-200 rounded-tr-lg rounded-br-lg text-accent font-bold' onClick={() => handleCopy(wallet)}>{copied ? "copied" : "copy"}</button>
                    </div>
                </div>
                <button type="button" className='block ml-auto px-5 py-1 rounded-full bg-secondary text-base text-primary' onClick={close}>Done</button>
            </div>
        </section>
    )
}

export default Success