"use client"
import SectionHeader from '@/app/components/SectionHeader'
import SectionTitle from '@/app/components/SectionTitle'
import { SectionsContent } from '@prisma/client'
import React, { useState } from 'react'


type HomeFormProps = {
    HeroValues: SectionsContent
    ParallaxValues: SectionsContent | undefined
}

const HomeForm: React.FC<HomeFormProps> = ({ HeroValues, ParallaxValues }) => {

    const [heroValues, setHeroValues] = useState<SectionsContent>(HeroValues)

    const handleHeroSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch("/api/sectioncontent", {
            method: "POST",
            body: JSON.stringify(heroValues)
        })

        const data = await response.json();

        console.log('data', data)

    }

    return (
        <>
            <SectionHeader className='justify-start'>
                <SectionTitle>
                    <h2>Hero Section</h2>
                </SectionTitle>
            </SectionHeader>
            <form onSubmit={handleHeroSubmit}>
                <div className='space-y-4 w-1/2 my-8'>

                    <input
                        type="text"
                        className='p-3 rounded-md outline-none bg-slate-700 text-white w-full'
                        placeholder='Section Name'
                        defaultValue={HeroValues?.sectionName as string}
                        onChange={(e) => setHeroValues((prev: SectionsContent) => (
                            {
                                ...prev,
                                sectionName: e.target.value
                            }
                        ))}
                    />

                    <input
                        type="text"
                        className='p-3 rounded-md outline-none bg-slate-700 text-white w-full'
                        placeholder='Title'
                        defaultValue={HeroValues?.title as string}
                        onChange={(e) => setHeroValues((prev: SectionsContent) => (
                            {
                                ...prev,
                                title: e.target.value
                            }
                        ))}

                    />
                    <input
                        type="text"
                        className='p-3 rounded-md outline-none bg-slate-700 text-white w-full'
                        placeholder='SubTitle'
                        defaultValue={HeroValues?.subTitle as string}
                        onChange={(e) => setHeroValues((prev: SectionsContent) => (
                            {
                                ...prev,
                                subTitle: e.target.value
                            }
                        ))}
                    />


                    <input
                        type="text"
                        className='p-3 rounded-md outline-none bg-slate-700 text-white w-full'
                        placeholder='Link Text'
                        defaultValue={HeroValues?.linkText as string}
                        onChange={(e) => setHeroValues((prev: SectionsContent) => (
                            {
                                ...prev,
                                linkText: e.target.value
                            }
                        ))}
                    />

                    <input
                        type="text"
                        className='p-3 rounded-md outline-none bg-slate-700 text-white w-full'
                        placeholder='Link Href'
                        defaultValue={HeroValues?.linkHref as string}
                        onChange={(e) => setHeroValues((prev: SectionsContent) => (
                            {
                                ...prev,
                                linkHref: e.target.value
                            }
                        ))}
                    />

                    <button className='bg-green-600 rounded-md text-white p-3 w-full'>
                        Ekle
                    </button>


                </div>
            </form>
        </>

    )
}

export default HomeForm