import React, { ReactNode } from 'react'
type LayoutType = { children: ReactNode }
const layout: React.FC<LayoutType> = ({ children }) => {
    return (
        <>
            <div>Admin Layout</div>
            {children}
        </>
    )
}

export default layout