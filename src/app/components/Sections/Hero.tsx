"use client"
import { SectionsContent } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import SplitType from 'split-type'
import gsap from 'gsap'


type SectionType = {
    SectionData: Omit<SectionsContent, 'id'> | undefined
}

const Hero: React.FC<SectionType> = ({ SectionData }) => {
    const heroContent = useRef<HTMLDivElement>(null);
    const heroLink = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (heroContent.current && heroLink.current) {
                const text = new SplitType(heroContent.current)
                const tl = gsap.timeline();

                tl.from([text.chars, heroLink.current], {
                    y: "150%",
                    opacity: 0,
                    stagger: {
                        each: 0.010
                    }
                });
            }
        })

        return () => ctx.revert();
    }, [])

    return (
        <section className='h-screen min-h-[600px] relative before:absolute before:inset-0 before:bg-[#0000005e]'>
            <div className="cover h-full">
                <div
                    style={{ backgroundImage: "url(/images/hero.webp)" }}
                    className='h-full w-full object-cover bg-fixed'
                ></div>
            </div>

            <div className="absolute inset-0 z-10 grid place-items-center ">
                <div className="container">
                    <div className='text-white text-4xl text-center'>

                        <div ref={heroContent} className='content space-y-4'>
                            <p>
                                <strong className='text-6xl font-bold'>
                                    Inspiration for travel by real people
                                    {SectionData?.title}
                                </strong>
                            </p>
                            <p>
                                Book smart, travel simple
                                {SectionData?.subTitle}
                            </p>
                        </div>

                        <Link
                            href={"/"}
                            className='mt-10 p-4 px-10 bg-white text-xl font-bold rounded-sm inline-block text-dark'
                            ref={heroLink}
                        >
                            Start Reading
                            {SectionData?.linkText}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero