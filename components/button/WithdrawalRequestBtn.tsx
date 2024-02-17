import React from 'react'
import { useFormStatus } from 'react-dom';

const WithdrawalRequestBtn = () => {

    const { pending } = useFormStatus();

    return (
        <button type="submit" className='bg-accent px-20 py-3 rounded-lg text-primary' disabled={pending}>{ pending ? "Processing" : "Submit" }</button>
    )
}

export default WithdrawalRequestBtn