import React from 'react'
import { useFormStatus } from 'react-dom'

type Props = {}

const DepositRequestBtn = (props: Props) => {

    const { pending } = useFormStatus();

    return (
        <button type="submit" className='bg-accent px-16 py-2 rounded-lg text-primary' disabled={pending}>{ pending ? "Processing" : "Submit" }</button>
    )
}

export default DepositRequestBtn