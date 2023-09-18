import Link from 'next/link';
import React from 'react'
import { MdWidgets } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";

const Sidebar = () => {
    return (
        <aside>
            <nav className='px-3 py-4'>

                <div className='my-6'>
                    <p className='font-semibold text-xl'>Home</p>
                    <ul className='my-4'>
                        <li>
                            <Link
                                href={"/dashboard"}
                                className='flex items-center gap-4 px-6 py-3 hover:bg-[#3A57E8] rounded-md transition-all'
                            >
                                <MdWidgets className="text-2xl" />
                                Dashboard
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className='my-6'>
                    <p className='font-semibold text-xl'>Pages</p>
                    <ul className='my-4'>
                        <li>
                            <Link
                                href={"/dashboard"}
                                className='flex items-center gap-4 px-6 py-3 hover:bg-[#3A57E8] rounded-md transition-all'
                            >
                                <TbWorldWww className="text-2xl" />
                                Pages
                            </Link>


                            <ul className='my-4 pl-12'>
                                <li>
                                    <Link
                                        href={"/dashboard/pages/home"}
                                        className='flex items-center gap-4 px-6 py-3 hover:bg-[#3A57E8] rounded-md transition-all'
                                    >
                                        Home
                                    </Link>

                                </li>
                            </ul>
                        </li>

                        <li>
                            <Link
                                href={"/dashboard/pages/blogs"}
                                className='flex items-center gap-4 px-6 py-3 hover:bg-[#3A57E8] rounded-md transition-all'
                            >
                                <TbWorldWww className="text-2xl" />
                                Blogs
                            </Link>
                        </li>
                    </ul>
                </div>

            </nav>
        </aside>
    )
}

export default Sidebar