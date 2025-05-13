"use client";

import { useTranslations } from "next-intl";
import { motion } from 'framer-motion';
import Link from "next/link";
import Image from "next/image";

interface Project {
    name: string;
    image: string;
    description: string;
    info?: string;
    stacks: string;
    link: string;
}


export default function Projects() {

    const t = useTranslations('Projects');

    const projectsCard: Project[] = [
        { name: 'Cyril Devessier', image: '/projects/cd.svg', description: 'Next APP', stacks: 'React | Next.js | CSS | JavaScript | MUI', link: 'https://www.cyrildevessier.com/' },
        { name: 'SignEval', image: '/projects/Logo_SignEval_blanc.png', description: 'PWA', info: 'Quizzbox Solutions', stacks: 'React | PWA | MUI | TypeScript', link: 'https://app.signeval.fr' },
        // { name: 'LA Medic Rio', image: '/projects/lamediclg.webp', description: 'Website Institucional', stacks: 'HTML | Sass | Javascript', link: 'https://lamedicrio.com/' },
        { name: 'Portfolio', image: '/projects/logoCV.png', description: 'Portfolio', stacks: 'React | Next.js | Talwind CSS | TypeScript', link: 'https://clementverdoire.fr/' },
    ]


    return (
        <main className="projects container w-full h-svh flex flex-col lg:items-center lg:justify-center">

            <div className="py-32 lg:py-0 ">

                <div className="flex flex-col items-center">
                    <h1 className={`font-title text-preto dark:text-white text-3xl`}>{t("Title")}</h1>
                    <span className="w-10 h-[2px] mt-2 bg-white dark:bg-lightBlue block rounded"></span>
                </div>

                <ul className="w-3/3  h-auto mt-3 py-8 grid grid-cols-1 grid-rows-4 
                lg:w-full lg:mt-8 lg:py-0 lg:gap-3 lg:grid-rows-2 lg:grid-cols-2 text-white">
                    {projectsCard.map((project, index) => (
                        <motion.li key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.4 }}
                            className="bg-white dark:bg-cinza w-[80%] m-auto rounded-3xl p-2 shadow-xl 
                        lg:w-full lg:h-full lg:flex lg:items-center lg:justify-between">

                            <Image
                                src={project.image}
                                alt={project.name}
                                width={200}
                                height={200}
                                className={`rounded m-auto lg:w-1/5 lg:max-h-24 ${project.name === "Cyril Devessier" || project.name === "SignEval"
                                    ? ""
                                    : "invert dark:invert-0"
                                    }`}
                            />


                            <div className="p-2 flex flex-col items-center justify-between 
                            lg:w-3/5 lg:items-start lg:flex-col">
                                <div className="w-full h-auto">
                                    <h2 className={`font-title text-cinza dark:text-white text-3xl 
                                    lg:text-2xl mt-2`}>
                                        {project.name}
                                    </h2>
                                    <small className="text-cinza dark:text-lightBlue">{project.description}</small>
                                    <p className="text-sm text-cinza dark:text-lightBlue">{project.info}</p>
                                    <p className="text-sm text-cinza dark:text-lightBlue">{project.stacks}</p>
                                </div>
                                <Link href={project.link} className="w-full text-center p-2 px-4 mt-3 bg-blue dark:bg-green text-preto rounded font-bold uppercase tracking-wider 
                                lg:w-2/3 lg:p-0 lg:mt-2 text-sm">{t("Button")}</Link>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>

        </main>
    )
}