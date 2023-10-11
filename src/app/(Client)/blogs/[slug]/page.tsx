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
        <main>
            <section>

                <div className="container">

                    <div className="content">
                        <div>
                            page {params.slug}

                            <h1>
                                {BlogDetail.title}
                            </h1>
                            <div dangerouslySetInnerHTML={{ __html: BlogDetail.RawContent as string }}></div>


                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
}

export default page