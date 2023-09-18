"use client"
import fetchData from '@/helpers/fetch'
import { Blog } from '@prisma/client'
import React from 'react'

type CardProps = {
    BlogData: Blog
}
const BlogCard: React.FC<CardProps> = ({ BlogData }) => {

    const DeleteBlog = async () => {
        const response =  await fetch("/api/blogs", {
            method: "DELETE",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: BlogData.id })
        })

        const data = await response.json();
        console.log('data', data)
    }

    return (
        <div className='flex gap-4'>
            <button
                onClick={DeleteBlog}
                className='p-3 py-2 bg-red-600 rounded-md'
            >
                DELETE
            </button>
            <input type="text" placeholder='Title' defaultValue={BlogData.title} className='bg-gray-700 text-white rounded-md py-2 px-4 outline-none' />
            <input type="text" placeholder="description" defaultValue={BlogData.description} className='bg-gray-700 text-white rounded-md py-2 px-4 outline-none' />
            <input type="text" placeholder="imageURL" defaultValue={BlogData.ImageURL} className='bg-gray-700 text-white rounded-md py-2 px-4 outline-none' />
        </div>
    )
}

export default BlogCard