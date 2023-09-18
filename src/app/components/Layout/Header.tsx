"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
    const pathname = usePathname();

    return (
        <header className={`absolute w-full py-11 z-50 ${pathname.length > 1 && "bg-gray-900 relative"}`}>
            <div className="container">
                <div className="flex items-center justify-between gap-10">

                    <Link href={"/"}>
                        <Image
                            src="/images/logo-white.webp"
                            width={360}
                            height={40}
                            alt='Logo'
                            className='max-w-full'
                        />
                    </Link>

                    <nav className='flex justify-center w-full max-lg:hidden'>
                        <ul className='flex gap-8 font-bold text-xl text-white w-full'>
                            <li>
                                <Link href={"/blogs"}>
                                    Blogs
                                </Link>
                            </li>

                        </ul>
                    </nav>

                    <div className='flex'>
                        <button className='text-3xl text-white'>
                            <AiOutlineSearch />
                        </button>


                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header