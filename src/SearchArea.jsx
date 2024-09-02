import React from 'react'

export default function SearchArea({ hdlInputChange }) {
    return (
        <>
            <p className="text-2xl">Product Search</p>
            <input className="input input-bordered w-full max-w-xl" type="text" placeholder="Search Here..."
                onChange={hdlInputChange} />
        </>
    )
}
