"use client";
import { useEffect, useRef, useState } from 'react';
import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { motion } from 'motion/react'
import { galleryData } from '@/app/variables/galleryData';
import { animateFadeUp, animateFromLeft, animateGradualSpacing } from '@/app/animation/animationVariants';
import { PageMarginContainer } from '@/app/PageMarginContainer';
import { interFont } from '@/app/fonts/fontsConfig';

export const Gallery = () => {
    const sliderRef = useRef<Slider | null>(null);

    const [isMin960, setIsMin960] = useState(false);
    const [isMin1140, setIsMin1140] = useState(false);

    useEffect(() => {
        // Handler function to check the window width
        const handleResize = () => {
            const width = window.innerWidth;
            setIsMin960(width >= 960 && width < 1140);
            setIsMin1140(width >= 1140);
        };

        // Initial check
        handleResize();

        // Attach the resize event listener
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <div className='w-full h-[900px] lg:py-[8rem] py-[4rem] flex flex-col justify-between gap-y-12'>

            <PageMarginContainer>
                <div className='flex flex-col gap-y-2'>
                    <div className={`degular-font-wide flex flex-wrap`}>
                        {"Our Gallery".split("").map((char, index) => (
                            <motion.h2
                                // viewport={{ once: true }}
                                key={`Welcome to${index}`}
                                variants={animateGradualSpacing}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={index}
                                exit="hidden"
                                style={{ whiteSpace: "pre-wrap" }}
                                className='text-gold md:text-5xl text-3xl font-bold'
                            >
                                {char}
                            </motion.h2>
                        ))}

                    </div>



                    <motion.p
                        variants={animateFadeUp}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        custom={0.25}

                        className='lg:w-[50%]'>
                        {"Experience the Perfect Blend of Fashion and Elegance – Explore Our Exclusive Collection of Shoes and Clothing in Our Gallery"}
                    </motion.p>
                </div>

            </PageMarginContainer>

            <div className="relative flex w-full h-full gap-x-3 justify-center items-center">
                <motion.div
                    animate={{ y: [0, 20, 0], }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className='absolute -right-[200px] -top-[150px] opacity-[15%] rotate-180 scale-75'>

                    <img src="/images/graphics/pentagon-design.png" alt="" className='w-full h-full flex object-cover' />

                </motion.div>

                <motion.div
                    animate={{ y: [0, 20, 0], }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className='absolute -left-[200px] -top-[150px] opacity-[15%]'>

                    <img src="/images/graphics/pentagon-design.png" alt="" className='w-full h-full flex object-cover' />

                </motion.div>


                <div className="z-10 absolute left-12 lg:left-20 xl:left-28 justify-center items-center">
                    <button onClick={() => { return sliderRef.current && sliderRef.current.slickPrev(); }}
                        className="cursor-pointer flex justify-center items-center rounded-full size-[40px] mx-auto bg-black/50 text-white"
                    >
                        <GrLinkPrevious className="size-[20px]" />
                    </button>
                </div>



                <div className="absolute left-0 right-0 lg:w-[90%] w-[98%] mx-auto justify-center items-center">
                    <Slider
                        ref={slider => {
                            sliderRef.current = slider;
                        }}
                        arrows={false}
                        dots={false}
                        slidesToShow={isMin1140 ? 3 : isMin960 ? 2 : 1}
                        infinite={true}
                        speed={1400}
                        autoplay={true}
                        pauseOnHover={false}
                        className="w-full h-full justify-center items-center overflow-hidden rounded-3xl"
                    >
                        {
                            Object.entries(galleryData).map(([key, item], index) => {
                                return (
                                    <div key={`housesDataSampleKey${index}`} className='overflow-hidden sm:h-[520px] h-[420px] md:w-[350px] w-full flex justify-center items-center'>

                                        <div className='relative overflow-hidden sm:h-[500px] h-[400px] w-[90%] mx-auto flex items-center rounded-3xl shadow-md drop-shadow-lg shadow-gray-800'>
                                            <motion.div
                                                viewport={{ once: true }}
                                                variants={animateFromLeft}
                                                initial={"offscreen"}
                                                whileInView={"onscreen"}
                                                custom={0}

                                                className='absolute top-0 bottom-0 left-0 right-0 flex w-full h-full object-cover bg-gray-500'>
                                                <img alt='project picture' src={item} className='flex w-full h-full object-cover' />

                                            </motion.div>


                                        </div>

                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>



                <div className="z-10 absolute right-12 lg:right-20 xl:right-28 justify-center items-center">
                    <button onClick={() => { return sliderRef.current && sliderRef.current.slickNext(); }}
                        className="cursor-pointer flex justify-center items-center rounded-full size-[40px] mx-auto bg-black/50 text-white"
                    >
                        <GrLinkNext className="size-[20px]" />
                    </button>
                </div>


            </div>


        </div>

    )
}
