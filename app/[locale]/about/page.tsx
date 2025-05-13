"use client";

import { useTranslations } from "next-intl";
import ListaDeHabilidades from "../../components/ListaDeHabilidades";
import Image from "next/image";
import { motion } from "framer-motion";




export default function About() {

    const t = useTranslations('About')

    return (
        <main className="about container w-full h-svh flex lg:items-center justify-center text-white">

            <div className="relative w-full h-fit flex flex-col items-center py-32 lg:py-0 ">


                <div className="flex flex-col items-center">
                    <h1 className={`font-title text-preto dark:text-white text-3xl`}>{t("Title")}</h1>
                    <span className="w-10 h-[2px] mt-2 bg-white dark:bg-lightBlue block rounded"></span>
                </div>

                <ul className="w-3/4 flex flex-col lg:flex-row items-stretch justify-center my-8 gap-3">

                    <motion.li className="text-cinza dark:text-lightBlue lg:w-1/2 bg-white dark:bg-cinza shadow-lg rounded-3xl  flex flex-col items-center justify-between py-8 px-2 text-center"
                        initial={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: .5 }}>
                        <Image src={'/icons/coding.webp'} width={45} height={45} alt="Icon Card" className="invert dark:invert-0" />
                        <h2 className="font-medium my-3">{t("CardTitle1")}</h2>
                        <p className="font-thin">{t("CardDescription1")}</p>
                    </motion.li>

                    <motion.li className="text-cinza dark:text-lightBlue lg:w-1/2 bg-white dark:bg-cinza shadow-lg rounded-3xl flex flex-col items-center justify-between py-8 px-2 text-center"
                        initial={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: .8 }}>
                        <Image src={'/icons/caneta.webp'} width={45} height={45} alt="Icon Card" className="invert dark:invert-0" />
                        <h2 className="font-medium my-3">{t("CardTitle2")}</h2>
                        <p className="font-thin">{t("CardDescription2")}</p>
                    </motion.li>

                    <motion.li className="text-cinza dark:text-lightBlue lg:w-1/2 bg-white dark:bg-cinza shadow-lg rounded-3xl  flex flex-col items-center justify-between py-8 px-2 text-center"
                        initial={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 1 }}>
                        <Image src={'/icons/facebook.png'} width={45} height={45} alt="Icon Card" className="dark:invert" />
                        <h2 className="font-medium my-3">{t("CardTitle3")}</h2>
                        <p className="font-thin">{t("CardDescription3")}</p>
                    </motion.li>

                </ul>


                <p className="text-preto dark:text-white lg:w-3/4 text-justify mb-6 p-8 lg:p-0">
                    {t("Description")}
                </p>

                <ListaDeHabilidades view='block' />


            </div>
        </main>
    )
}