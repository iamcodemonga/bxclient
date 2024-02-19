"use client"

import React from 'react'
import TopupBtn from '../button/TopupBtn'
import { topupfunds } from '@/actions';
import toast from 'react-hot-toast';

const TopUpForm = () => {
    const handleTopup = async() => {
        const result = await topupfunds();
        if (result?.error) {
            toast.error(result?.error)
            return;
        }
        toast.success("Daily top-ups was successful!");
        return;
    }

    return (
        <form action={async() => await handleTopup()} className='mb-7 mt-5 w-full flex justify-end'><TopupBtn /></form>
    )
}

export default TopUpForm