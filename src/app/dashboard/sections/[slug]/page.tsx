import React from 'react'
import Editor from '../../Components/Editor'

type PageProps = {
    params: {
        slug: string
    }
}
const page: React.FC<PageProps> = ({ params }) => {
    return (
        <div>
            <Editor />
        </div>
    )
}

export default page