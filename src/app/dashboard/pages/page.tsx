import SectionHeader from '@/app/components/SectionHeader'
import SectionTitle from '@/app/components/SectionTitle'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <section className='py-2' >

            <div className="container">

                <SectionHeader className='justify-start'>
                    <SectionTitle>
                        <h1>Pages</h1>
                    </SectionTitle>
                </SectionHeader>

                <ul>
                    <li>
                        <Link href={"/dashboard/pages/home"}>
                            Home Page
                        </Link>
                    </li>
                </ul>

            </div>

        </section>
    )
}

export default page