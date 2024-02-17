import React from 'react'
import { useFormStatus } from 'react-dom'

type Props = {}

const EditBalBtn = (props: Props) => {

    const { pending } = useFormStatus()

    return (
        <button type="submit" className='bg-accent py-2 px-10 rounded-lg text-sm mb-3 text-primary' disabled={pending}>{pending ? "processing..." : "submit"}</button>
    )
}

export default EditBalBtn