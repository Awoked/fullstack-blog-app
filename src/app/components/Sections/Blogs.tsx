"use client"
import { Blog } from '@prisma/client'
import React, { useEffect, useRef } from 'react'
import BlogCard from '../cards/BlogCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);
type BlogsType = {
    blogData?: Blog[]
}

const Blogs: React.FC<BlogsType> = ({ blogData }) => {

    const blogsWrapper = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (blogsWrapper.current) {
                const blogCards = blogsWrapper.current.querySelectorAll(".blog-card");

                ScrollTrigger.batch(blogCards, {
                    onEnter: element => {
                        gsap.from(element, {
                            y: 100,
                            stagger: 0.15,
                        })
                    },

                })

            }
        })

        return () => ctx.revert();
    }, [])

    return (
        <section className='py-14'>
            <div className="container">

                <div ref={blogsWrapper} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {blogData?.map((data, index) => (
                        <BlogCard
                            key={index}
                           BlogData={data}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Blogs