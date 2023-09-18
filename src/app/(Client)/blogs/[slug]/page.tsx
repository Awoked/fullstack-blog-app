import React from 'react'
import prisma from '../../../../../prisma/client'
import { redirect } from 'next/navigation'

type PageProps = {
    params: {
        slug: string
    }
}

const getBlog = async (slug: string) => {

    const data = await prisma.blog.findUnique({
        where: {
            id: Number(slug)
        }
    })
    return data
}

const page: React.FC<PageProps> = async ({ params }) => {

    const BlogDetail = await getBlog(params.slug);

    if (!BlogDetail) {
       return redirect("/")
    }

    return (
        <div>page {params.slug}</div>
    )
}

export default page