"use client";
import { PageMarginContainer } from '@/app/PageMarginContainer'
import { motion } from "motion/react";
import { animateFromLeft, animateGradualSpacing, animateFadeUp } from '@/app/animation/animationVariants';

export const Project100 = () => {

    return (
        <div className='w-full lg:py-[8rem] py-[4rem] overflow-hidden'>

            <PageMarginContainer>
                <div className='w-full relative flex lg:flex-row flex-col justify-center lg:gap-x-16 lg:gap-y-0 gap-y-12'>


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
                        className='absolute lg:-left-[280px] -left-[150px] lg:bottom-0 -bottom-[130px]'>

                        <img src="/images/graphics/shapes-design2.png" alt="" className='lg:w-[400px] w-[200px] h-full flex object-cover' />

                    </motion.div>


                    <motion.div
                        animate={{ y: [0, 50, 0], }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className='absolute -right-[180px] -top-10'>

                        <img src="/images/graphics/shapes-design2.png" alt="" className='w-[300px] h-full flex object-cover' />

                    </motion.div>




                    <div className="z-10 lg:hidden flex flex-wrap">
                        {"Project 100".split("").map((char, index) => (
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


                    <motion.div
                        variants={animateFromLeft}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        custom={0.25}

                        className='z-10 flex lg:w-[400px] w-full lg:h-auto h-[400px] bg-gradient-to-b from-blue-400 via-white to-blue-100 rounded-[2.5rem] overflow-hidden'>
                        <img src="/images/pictures/IMG_1775.webp" alt="" className='w-full h-full flex object-cover scale-x-[-1]' />
                    </motion.div>


                    <div className='z-10 lg:w-[50%] flex gap-y-6 flex-col'>

                        <div className="lg:flex hidden flex-wrap">
                            {"Project 100".split("").map((char, index) => (
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



                        <motion.div
                            variants={animateFadeUp}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            custom={0.25}

                            className='gap-y-4 flex flex-col'>
                            <h4 className='text-xl italic font-bold'>
                                {"What is Project 100?"}
                            </h4>

                            <p>
                                {"Project 100 is an innovative initiative by Rach. Gabriels Fashion Company aimed at training and empowering 100 young Nigerians in shoemaking and entrepreneurship every year. This program provides out-of-school youth with hands-on training, mentorship, and market integration support to build successful careers in the fashion and footwear industry."}
                            </p>
                        </motion.div>

                        <motion.div
                            variants={animateFadeUp}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            custom={0.25}

                            className='gap-y-4 flex flex-col'>
                            <h4 className='text-xl italic font-bold'>
                                {"Why Project 100?"}
                            </h4>

                            <p>
                                {"Nigeria faces high unemployment rates, especially among young people. Many have the talent and passion for fashion but lack the skills and resources to turn their aspirations into reality. Project 100 is designed to change this by offering:"}
                            </p>

                            <ul className='flex flex-col text-sm list-disc pl-4'>
                                <li>
                                    {"Comprehensive training in shoemaking and business skills"}
                                </li>

                                <li>
                                    {"Access to mentorship from industry experts"}
                                </li>

                                <li>
                                    {"Financial and logistical support for launching their own brands"}
                                </li>

                                <li>
                                    {"A structured pathway to employment or entrepreneurship"}
                                </li>
                            </ul>
                        </motion.div>

                    </div>

                </div>
            </PageMarginContainer>
        </div>
    )
}
