import Hero from '../components/Sections/Hero';
import prisma from '../../../prisma/client';
import Blogs from '../components/Sections/Blogs';
import ParallaxContent from '../components/Sections/ParallaxContent';
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

export const revalidate = 1;

export default async function Home() {
    const SectionsData = await getSectionsData();
    const FindSectionData = (sectionName: string) => {
        return SectionsData.Sections.find((data) => data.sectionName === sectionName)
    }

    const hero = FindSectionData("hero");
    const parallaxContent = FindSectionData("parallaxContent");

    return (
        <main>
            <Hero
                SectionData={hero}
            />
            <Blogs
                blogData={SectionsData.blogs}
            />

            <ParallaxContent
                SectionData={parallaxContent}
            />
        </main>
    )
}


