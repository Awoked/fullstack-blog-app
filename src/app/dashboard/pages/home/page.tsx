import SectionHeader from '@/app/components/SectionHeader'
import SectionTitle from '@/app/components/SectionTitle'
import React from 'react'
import HomeForm from '../../Components/Forms/HomeForms'
import prisma from '../../../../../prisma/client';
import { SectionsContent } from '@prisma/client';


async function getSectionsData() {
    const SectionsData = await prisma.sectionsContent.findMany({
        where: {
            sectionName: {
                in: ["hero", "parallaxContent"]
            }
        }
    });
    const blogs = await prisma.blog.findMany({
        take: 6
    });

    return {
        Sections: SectionsData,
        blogs
    };
}

const page = async () => {
    const SectionsData = await getSectionsData();
    const FindSectionData = (sectionName: string) => {
        const data = SectionsData.Sections.find((data) => data.sectionName === sectionName)
        return data as SectionsContent
    }

    const hero = FindSectionData("hero");
    const parallaxContent = FindSectionData("parallaxContent");


    return (
        <section>
            <div className="container">

                <SectionHeader className='my-8'>
                    <SectionTitle>
                        <h1>Home</h1>
                    </SectionTitle>
                </SectionHeader>


                <div className="wrapper">
                    <HomeForm
                        HeroValues={hero}
                        ParallaxValues={parallaxContent}
                    />
                </div>

            </div>

        </section>
    )
}

export default page