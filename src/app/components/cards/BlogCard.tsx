"use client"
import { Blog } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type CardType = {
    BlogData: Omit<Blog, "id">
}

const BlogCard: React.FC<CardType> = ({ BlogData }) => {

    return (
        <Link
            href={"/"}
            title={BlogData.title}
            className='group blog-card'
        >
            <div className=' overflow-hidden mb-9'>
                <Image
                    // src={BlogData.ImageURL}
                    src={"https://picsum.photos/400/420"}
                    width={560}
                    height={420}
                    alt={BlogData.title}
                    className='w-full object-cover'
                />
            </div>

            <div className='grid grid-rows-3 space-y-6'>
                <h3 className='text-4xl font-bold mb-1.5'>{BlogData.title}</h3>
                <p className='text-xl font-light'>
                    {BlogData.description}
                </p>

                <span className='border-b border-black w-max text-2xl font-bold self-end transition-transform group-hover:drop-shadow-md'>
                    View Post
                </span>
            </div>
        </Link>
    )
}

export default BlogCard