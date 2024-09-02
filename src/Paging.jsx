import React from 'react'

export default function Paging({ curPage, totalPage, hdlPage }) {
    return (
        <div className='flex gap-4 items-baseline mt-4'>
            <button className='btn btn-circle'
                onClick={() => hdlPage(-1)}
            >&lt;</button>
            <p>{`${curPage} / ${totalPage}`}</p>
            <button className='btn btn-circle'
                onClick={() => hdlPage(1)}
            >&gt;</button>
        </div>
    )
}
