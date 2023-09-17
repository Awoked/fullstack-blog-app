import React, { useState } from 'react'
import { createContext } from 'react'


const LayoutContext = createContext<any>(null);

const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {


    return (
        <LayoutContext.Provider value={{}}>
            {children}
        </LayoutContext.Provider>
    )
}

export { LayoutContext, LayoutProvider }