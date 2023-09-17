import React, { ReactNode } from 'react'
import Preloader from '../components/Preloader'
import Header from '../components/Layout/Header'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Preloader />
            <Header />
            {children}
        </>
    )
}

export default layout