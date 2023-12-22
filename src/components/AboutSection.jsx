'use client'
import Image from "next/image";
import computerImg from '@/images/tarn-nguyen-y-LHAtkQJgc-unsplash.jpg'
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: 'skills',
        content: (
            <ul>
                <li>
                    Node.js
                </li>
                <li>
                    Express
                </li>
                <li>
                    PostgreSQL
                </li>
                <li>
                    Sequelize
                </li>
            </ul>
        )
    },
    {
        title: "Education",
        id: 'education',
        content: (
            <ul>
                <li>
                    Fullstack Academy of Code
                </li>
                <li>
                    University of California
                </li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: 'experience',
        content: (
            <ul>
                <li>
                    AWS CLoud Practitioner
                </li>
                <li>
                    Google Professional CLoud Developer
                </li>
            </ul>
        )
    },
]

const AboutSection = () => {
    const [tab, setTab] = useState('skills')
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    };
    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src={computerImg.src} height={500} width={500} />
                <div>
                    <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
                    <p className="text-base lg:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget nibh mi. Ut et mauris ornare, maximus diam nec, egestas arcu. Aliquam scelerisque mollis volutpat. Mauris vehicula ex at risus consequat consequat id eu nisi. Nulla ullamcorper lacus a sem egestas, in euismod ante feugiat.
                    </p>
                    <div className="flex flex-row mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                            Skills
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                            Education
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>
                            Experience
                        </TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
