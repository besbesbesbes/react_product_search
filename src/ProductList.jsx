import React from 'react'

export default function ProductList({ products }) {
    return (
        <ul className="pl-16 self-start h-80">
            {products.map((el, idx) => (
                <li className="text-sm list-disc" key={idx}>{el.title} | {el.category} | {el.price}</li>
            ))}
        </ul>
    )
}
