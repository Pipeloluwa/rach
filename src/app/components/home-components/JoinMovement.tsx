"use client";
import { PageMarginContainer } from '@/app/PageMarginContainer'
import { motion } from "motion/react";
import { animateGradualSpacing, animateFadeUp } from '@/app/animation/animationVariants';
import { interFont } from '@/app/fonts/fontsConfig';

export const JoinMovement = () => {

    return (
        <div className='w-full lg:py-[8rem] py-[4rem] overflow-hidden bg-black'>

            <PageMarginContainer>
                <div className='w-full relative flex justify-center  gap-x-24'>


                    <motion.div
                        animate={{ y: [0, 20, 0], }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className='absolute -right-[200px] -top-[150px] opacity-[7%] rotate-180 scale-75'>

                        <img src="/images/graphics/pentagon-design.png" alt="" className='w-full h-full flex object-cover' />

                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 20, 0], }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className='absolute -left-[200px] -top-[150px] opacity-[7%]'>

                        <img src="/images/graphics/pentagon-design.png" alt="" className='w-full h-full flex object-cover' />

                    </motion.div>

                    <motion.div
                        animate={{ x: [0, 50, 0], }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className='absolute -left-[280px] bottom-0'>

                        <img src="/images/graphics/shapes-design2.png" alt="" className='w-[400px] h-full flex object-cover' />

                    </motion.div>


                    <motion.div
                        animate={{ y: [0, 50, 0], }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className='absolute -right-[180px] -top-10'>

                        <img src="/images/graphics/shapes-design2.png" alt="" className='w-[300px] h-full flex object-cover' />

                    </motion.div>


                    <div className='z-10 w-full lg:min-h-[350px] bg-blue flex lg:flex-row flex-col lg:gap-x-12 lg:gap-y-0 gap-y-8 rounded-[2.5rem]'>

                        <motion.div
                            animate={{ x: [0, -30, 0], }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}

                            className='z-10 lg:flex hidden w-[750px] h-[350px] bg-gradient-to-b from-blue-400 via-white to-blue-100 rounded-[2.5rem] overflow-hidden'>
                            <img src="/images/pictures/IMG_2099.webp" alt="" className='w-full h-full flex object-cover' />
                        </motion.div>


                        <motion.div
                            animate={{ y: [-30, 0, -30], }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}

                            className='z-10 lg:hidden flex h-[350px] bg-gray-500 rounded-[2.5rem] overflow-hidden'>
                            <img src="/images/pictures/IMG_2099.webp" alt="" className='w-full h-full flex object-cover' />
                        </motion.div>


                        <div className='w-full flex flex-col gap-y-8 items-center justify-center lg:mr-12 p-6'>
                            <div className={`degular-font-wide flex flex-wrap`}>
                                {"Join The Movement".split("").map((char, index) => (
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

                            >
                                {"Be part of the Rach. Gabriels community—whether as a customer, partner, or supporter of Project 100. Together, we can make luxury accessible, create opportunities, and empower the next generation of Nigerian shoemakers."}
                            </motion.p>
                        </div>

                    </div>

                </div>
            </PageMarginContainer>
        </div>
    )
}
