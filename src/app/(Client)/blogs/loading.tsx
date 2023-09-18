import React from 'react'

const loading = () => {

    return (
        <div>
            <div className="container">

                <div className='h-28 bg-gray-800 animate-pulse mb-20'></div>
                <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        [...Array(30)].map((_, idx) => (
                            <li key={idx} className='h-96 border bg-gray-800 animate-pulse'>

                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default loading