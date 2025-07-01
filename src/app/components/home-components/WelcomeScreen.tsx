"use client";;
import dynamic from 'next/dynamic';

import { interFont } from '@/app/fonts/fontsConfig';
import { motion } from "motion/react";
import { introData } from '@/app/variables/sharedVariables';
import { animateBlurIn, animateGradualSpacing, animateFromLeft, animateFromRight } from '@/app/animation/animationVariants';
import { WelcomeSuspense } from '../suspense-components/WelcomeSuspense';
import { useEffect } from 'react';
import Link from 'next/link';


const WelcomeScreen = () => {

    useEffect(() => {

    }, []);



    return (
        <div className='w-full min-h-svh lg:-mt-[90px] mt-[50px]  flex flex-col mb-20 px-[5%] relative overflow-hidden lg:flex justify-center items-center '>


            <motion.div
                animate={{ y: [0, 20, 0], }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className='absolute right-10 -top-40 opacity-[12%] rotate-180 scale-75'>

                <img src="/images/graphics/pentagon-design.png" alt="" className='w-full h-full flex object-cover' />

            </motion.div>

            <motion.div
                animate={{ y: [0, 20, 0], }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className='absolute -left-10 top-0 opacity-[12%]'>

                <img src="/images/graphics/pentagon-design.png" alt="" className='w-full h-full flex object-cover' />

            </motion.div>




            <div className='absolute left-0 bottom-0'>

                <motion.div
                    animate={{ x: [0, 50, 0], }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className=' flex 2xl:size-[250px] xl:size-[200px] size-[150px] lg:opacity-100 opacity-0  bg-gray-500 rounded-[2.5rem] overflow-hidden'>

                    <img src="/images/pictures/IMG_1945.webp" alt="" className='w-full h-full flex object-cover' />
                </motion.div>

            </div>



            {/* <motion.div
                variants={animateFromLeft}
                initial={"offscreen"}
                whileInView={"onscreen"}
                custom={0.25}

                className='absolute lg:left-[200px] xl:-ml-0 lg:-ml-[100px] lg:top-[150px] lg:opacity-100 opacity-0'>

                <img src="/images/graphics/shapes-design-gold.png" alt="" className='lg:w-[200px] sm:w-[150px] w-[100px]' />

            </motion.div> */}




            <div className='lg:opacity-100 opacity-0 pt-20 flex absolute right-0 2xl:bottom-0'>


                <motion.div
                    variants={animateFromRight}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    custom={0.25}

                    className='absolute xl:-left-[190px] -left-[100px]'>
                    <img src="/images/graphics/arrow.png" alt="" className='w-[250px]' />
                </motion.div>

                <motion.div
                    animate={{ x: [0, 50, 0], }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className='flex 2xl:size-[550px] xl:size-[350px] size-[250px] bg-gray-500 rounded-[4.5rem] overflow-hidden'>
                    <img src="/images/pictures/IMG_1458.webp" alt="" className='w-full h-full flex object-cover' />
                </motion.div>

            </div>




            <div className='z-10 lg:w-[600px] sm:w-[80%] xl:ml-[250px] lg:mt-[100px] mx-auto flex flex-col lg:items-start items-center justify-center lg:text-start text-center px-[2%] gap-y-8'>
                <motion.header
                    variants={animateBlurIn}
                    initial={"offscreen"}
                    whileInView={"onscreen"}

                    className={` degular-font-wide flex flex-col lg:items-start items-center gap-y-2 font-bold`}>

                    <div className=''>
                        <motion.div
                            variants={animateFromLeft}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            custom={0.25}>

                            <img src="/images/graphics/shapes-design-gold.png" alt="" className='lg:-ml-[150px] md:-ml-[120px] lg:w-[200px] md:w-[150px] md:flex hidden' />

                        </motion.div>


                        <h1 className='md:-mt-[50px]'>
                            <span className='text-transparent bg-gradient-to-b from-[#ffe894] from-[30%] to-[#a78304] bg-clip-text xl:text-[80px] lg:text-[70px] md:text-[60px] text-5xl xl:leading-[100px] leading-[80px]'>
                                    {"Rach."}
                            </span>

                            <br className='lg:flex hidden' />
                            <span className=' text-transparent bg-gradient-to-b from-[#ffe894] from-[30%] to-[#a78304] bg-clip-text xl:text-[80px] lg:text-[70px] md:text-[60px] text-5xl xl:leading-[100px] leading-[80px]'>
                                    {" Gabriels"}
                            </span>

                        </h1>
                    </div>





                    <h3 className='xl:text-[40px] md:text-[40px] text-3xl'>
                        {"Fashion Company"}
                    </h3>
                </motion.header>

                <div className='flex justify-center items-center gap-x-2'>
                    <div className='w-[3px] md:h-8 h-12 bg-white' />


                    <div className="flex flex-wrap gap-x-1">
                        {"ZERO BUDGET, MILLION DOLLAR LOOK".split("").map((char, index) => (
                            <motion.p
                                // viewport={{ once: true }}
                                key={`Welcome to${index}`}
                                variants={animateGradualSpacing}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={index}
                                exit="hidden"
                                style={{ whiteSpace: "pre-wrap" }}
                                className='base-color1 sm:text-lg'
                            >
                                {char}
                            </motion.p>
                        ))}
                    </div>


                </div>


                <motion.main
                    // viewport={{once: true}}
                    variants={animateFromLeft}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    custom={0.25}

                    className='flex text-sm lg:text-start text-center'>
                    {introData}
                </motion.main>




                <motion.div
                    animate={{ x: [-25, 25, -25], }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className='lg:hidden flex md:size-[450px] size-[300px] bg-gray-500 rounded-[4.5rem] overflow-hidden'>
                    <img src="/images/pictures/IMG_1458.webp" alt="" className='w-full h-full flex object-cover' />
                </motion.div>


                <Link href={"/project100"} className={`degular-font-wide big-button text-[16px] w-[250px] h-[60px] flex justify-center items-center rounded-xl text-gray-800 font-bold bg-gradient-to-b from-[#e2be3b] from-[30%] to-[#a78304]`}>
                    {"View Project 100"}
                </Link>

                {/* <div className='bg-gradient-to-r from-red-300 to-transparent w-[40%] h-1'/> */}

            </div>





        </div>
    )
}




export default dynamic(() => Promise.resolve(WelcomeScreen), { loading: () => <WelcomeSuspense />, ssr: false });
