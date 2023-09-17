"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import React, { useContext } from 'react'

import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {

    const pathname = usePathname();
    console.log('pathname', pathname.length)

    return (
        <header className={`absolute w-full py-11 z-50 ${pathname.length > 1 && "bg-gray-900 relative"}`}>
            <div className="container">
                <div className="flex items-center justify-between">

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
                        <ul className='flex gap-8 font-bold text-xl text-white'>
                            <li>
                                <Link href={"/blogs"}>
                                    Destinations
                                </Link>
                            </li>
                            <li>
                                <Link href={"/blogs"}>
                                    Food
                                </Link>
                            </li>
                            <li>
                                <Link href={"/blogs"}>
                                    Well Being
                                </Link>
                            </li>
                            <li>
                                <Link href={"/blogs"}>
                                    Sport
                                </Link>
                            </li>
                            <li>
                                <Link href={"/blogs"}>
                                    Family
                                </Link>
                            </li>
                            <li>
                                <Link href={"/blogs"}>
                                    Lifestyle
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