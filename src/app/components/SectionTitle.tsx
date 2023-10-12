"use client"
import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type SectionTitleType = {
    children?: ReactNode
    className?: string

}
const SectionTitle: React.FC<SectionTitleType> = ({ children, className }) => {
    return (
        <div className={twMerge("text-5xl font-bold", className)}>
            {children}
        </div>
    )
}

export default SectionTitle