"use client"

import React from 'react'
import { useFormStatus } from 'react-dom'

type Props = {}

const TopupBtn = (props: Props) => {

    const { pending } = useFormStatus()

    return (
        <button type="submit" className="px-5 py-1 rounded-md bg-green-500" disabled={pending}>{pending ? "Disbursing funds..." : "Daily top-up"}</button>
    )
}

export default TopupBtn