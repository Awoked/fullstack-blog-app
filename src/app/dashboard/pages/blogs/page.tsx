import fetchData from '@/helpers/fetch'
import { Blog } from '@prisma/client';
import React from 'react'
import BlogCard from '../../Components/BlogCard';
import CreateBlog from '@/app/components/Forms/CreateBlog';
import prisma from '../../../../../prisma/client';


const getBlogs = async () => {
    return await prisma.blog.findMany();
}


const page = async () => {
    const Blogs = await getBlogs();

    return (
        <section>

            <div className="container">
                <CreateBlog />
                <div className='space-y-4 py-10'>
                    {

                        Blogs?.map((data, index) => (
                            <BlogCard
                                BlogData={data}
                                key={index}
                            />
                        ))
                    }
                </div>
            </div>

        </section>
    )
}

export default page