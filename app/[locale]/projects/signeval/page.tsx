"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const maquettes = [
    "/projects/signeval/login-page.png",
    "/projects/signeval/signin-page.png",
    "/projects/signeval/session-page.png",
    "/projects/signeval/one-session-page.png",
    "/projects/signeval/trainees-page.png",
    "/projects/signeval/add-trainees.png",
    "/projects/signeval/delete-session.png",
    "/projects/signeval/menu.png",
    "/projects/signeval/logout-page.png",
    "/projects/signeval/session-page-dark.png",
    "/projects/signeval/one-session-page-dark.png",
    "/projects/signeval/trainees-page-dark.png"
];

export default function SignevalPage() {
    const t = useTranslations("Projects.SignEval");

    return (
        <main className="projects container w-full min-h-svh flex flex-col items-center justify-center py-16">
            {/* Titre */}
            <div className="text-center mb-5">
                <h1 className="font-title text-3xl text-preto dark:text-white">
                    {t("Title")}
                </h1>
                <span className="w-12 h-[2px] mt-2 bg-white dark:bg-lightBlue block mx-auto rounded"></span>
            </div>

            {/* Slider dans un iPhone stylisé */}
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="w-[300px] h-[660px] pb-8 shadow-none bg-transparent"
            >
                {maquettes.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-[300px] h-[620px] bg-black rounded-[3rem] border-[6px] border-gray-800 shadow-2xl overflow-hidden">
                            {/* Notch iPhone */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-b-xl z-10" />

                            {/* Maquette */}
                            <Image
                                src={src}
                                alt={`Maquette ${index + 1}`}
                                fill
                                className="bg-white"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </main>
    );
}
