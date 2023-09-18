import React from 'react'
import prisma from '../../../../prisma/client';
import BlogCard from '../../components/cards/BlogCard';
import Blogs from '@/app/components/Sections/Blogs';
import SectionHeader from '@/app/components/SectionHeader';
import SectionTitle from '@/app/components/SectionTitle';


async function getBlogs() {
    const data = await prisma.blog.findMany();

    return data;
}

const page = async () => {
    const blogData = await getBlogs();

    return (
        <main>
            <SectionHeader className='my-10'>
                <SectionTitle>
                    <h1>Blogs</h1>
                </SectionTitle>
            </SectionHeader>
                
            <section>
                <div className="container">
                    <Blogs
                        blogData={blogData}
                    />
                </div>
            </section>
        </main>
    )
}

export default page