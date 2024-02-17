import React from 'react'
import { useFormStatus } from 'react-dom'

type Props = {}

const ForgotPasswordBtn = (props: Props) => {

    const { pending } = useFormStatus()
     
    return (
        <button type="submit" className="py-3 w-full bg-accent rounded-md text-sm text-bold text-primary mt-5" disabled={pending}>{ pending ? "Processing" : "Submit" }</button>
    )
}

export default ForgotPasswordBtn