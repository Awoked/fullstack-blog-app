import React from 'react'

const loading = () => {

    return (
        <div>
            <ul className='space-y-4'>
                {
                    [...Array(20)].map((_,idx) =>(
                        <li key={idx} className='h-10 border bg-gray-200 animate-pulse'>

                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default loading