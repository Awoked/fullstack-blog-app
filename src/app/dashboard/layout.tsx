import React, { ReactNode } from 'react'
import Sidebar from './Components/Layout/Sidebar'
import Header from './Components/Layout/Header'
type LayoutType = { children: ReactNode }
const layout: React.FC<LayoutType> = ({ children }) => {
    return (
        <>
            {/* <Header /> */}
            <div className='flex h-[100dvh] text-white'>
                <div className='max-w-xs w-full bg-[#222738] overflow-y-auto'>
                    <Sidebar />
                </div>
                <div className='flex-1 bg-[#151824] overflow-y-auto'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default layout