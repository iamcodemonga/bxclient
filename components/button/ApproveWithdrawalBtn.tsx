import React from 'react'
import { useFormStatus } from 'react-dom'

type Props = {}

const ApproveWithdrawalBtn = (props: Props) => {

    const { pending } = useFormStatus()

    return (
        <button type="submit" className='bg-blue-500 text-xs rounded-md font-bold py-1 px-3 text-primary' disabled={pending}>{pending ? "Processing..." : "Pay now"}</button>
    )
}

export default ApproveWithdrawalBtn