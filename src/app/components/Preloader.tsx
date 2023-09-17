"use client"
import gsap from 'gsap';
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

const Preloader = () => {
    const preloaderRef = useRef(null);

    useEffect(() => {
        gsap.to(preloaderRef.current, {
            autoAlpha: 0
        })
    }, [])

    return (
        <div className='fixed inset-0  z-[9999] bg-black text-white grid place-items-center' ref={preloaderRef}>
            <Image
                src={"/images/logo-white.webp"}
                width={300}
                height={40}
                alt='Logo'
                className='max-w-full  animate-pulse'
            />
        </div>
    )
}

export default Preloader