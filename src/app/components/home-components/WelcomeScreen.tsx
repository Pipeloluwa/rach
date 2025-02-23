"use client";
import dynamic from 'next/dynamic';

import { interFont } from '@/app/fonts/fontsConfig';
import LogoComponent from '../shared-components/LogoComponent';
import { motion } from "motion/react";
import { introData } from '@/app/variables/sharedVariables';
import { animateBlurIn, animateGradualSpacing, animateFromLeft, animateFromRight } from '@/app/animation/animationVariants';
import { WelcomeSuspense } from '../suspense-components/WelcomeSuspense';


const WelcomeScreen = () => {



    return (
        <div className='w-full min-h-svh mb-20 px-[5%] relative overflow-hidden lg:flex justify-center items-center '>


            <div className='flex justify-center lg:absolute left-0 right-0 top-5 '>
                <div className='size-[140px]'>
                    <LogoComponent />
                </div>
            </div>



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
                    className=' flex 2xl:size-[250px] xl:size-[200px] size-[150px] lg:opacity-100 opacity-0  bg-gradient-to-b from-blue-400 via-white to-blue-100 rounded-[2.5rem] overflow-hidden'>

                    <img src="/images/pictures/IMG_1458.webp" alt="" className='w-full h-full flex object-cover' />
                </motion.div>

            </div>



            <motion.div
                variants={animateFromLeft}
                initial={"offscreen"}
                whileInView={"onscreen"}
                custom={0.25}

                className='absolute lg:left-[200px] xl:top-[150px] lg:top-[200px] lg:opacity-100 opacity-0'>

                <img src="/images/graphics/shapes-design-gold.png" alt="" className='lg:w-[200px] sm:w-[150px] w-[100px]' />

            </motion.div>




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
                    className='flex 2xl:size-[550px] xl:size-[350px] size-[250px]  bg-gradient-to-b from-blue-400 via-white to-blue-100 rounded-[4.5rem] overflow-hidden'>
                    <img src="/images/pictures/IMG_1945.webp" alt="" className='w-full h-full flex object-cover' />
                </motion.div>

            </div>




            <div className='lg:absolute lg:left-[300px] left-0 right-0 bottom-20 lg:w-[600px] sm:w-[80%] lg:mx-0 mx-auto flex flex-col lg:items-start items-center justify-center pt-10 px-[2%] gap-y-8'>
                <motion.header
                    variants={animateBlurIn}
                    initial={"offscreen"}
                    whileInView={"onscreen"}

                    className={` ${interFont.className} flex flex-col items-center gap-y-2 font-bold`}>

                    <h1>
                        <span className='bg-gradient-to-b from-[#ffe894] from-[30%] to-[#a78304] bg-clip-text xl:text-[80px] lg:text-[70px] md:text-[60px] text-5xl xl:leading-[100px] leading-[80px]'>
                            <span className='text-transparent'>
                                {"Rach."}
                            </span>
                        </span>

                        <br className='lg:flex hidden' />
                        <span className='bg-gradient-to-b from-[#ffe894] from-[30%] to-[#a78304] bg-clip-text xl:text-[80px] lg:text-[70px] md:text-[60px] text-5xl xl:leading-[100px] leading-[80px]'>
                            <span className='text-transparent'>
                                {" Gabriels"}
                            </span>
                        </span>

                    </h1>




                    <h3 className='xl:text-[50px] md:text-[40px] text-3xl'>
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


                {/* <button className='big-button bg-blue w-[200px] flex justify-center items-center rounded-xl hover:bg-white hover:text-blue-500 duration-700'>
                    {"View Gallery"}
                </button> */}

                <motion.main
                    // viewport={{once: true}}
                    variants={animateFromLeft}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    custom={0.25}

                    className='flex text-sm text-center'>
                    {introData}
                </motion.main>


                <motion.div
                    animate={{ x: [-25, 25, -25], }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className='lg:hidden flex md:size-[450px] size-[300px] bg-gradient-to-b from-blue-400 via-white to-blue-100 rounded-[4.5rem] overflow-hidden'>
                    <img src="/images/pictures/IMG_1945.webp" alt="" className='w-full h-full flex object-cover' />
                </motion.div>


                {/* <div className='bg-gradient-to-r from-red-300 to-transparent w-[40%] h-1'/> */}

            </div>
        </div>
    )
}




export default dynamic(() => Promise.resolve(WelcomeScreen), {loading: () => <WelcomeSuspense />, ssr: false });
