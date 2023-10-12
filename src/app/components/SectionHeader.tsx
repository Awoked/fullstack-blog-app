import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type SectionHeaderType = {
    className?: string
    children?: ReactNode
}
const SectionHeader: React.FC<SectionHeaderType> = ({
    className,
    children
}) => {
    return (
        <div className={twMerge('flex justify-center', className)}>
            {children}
        </div>
    )
}

export default SectionHeader