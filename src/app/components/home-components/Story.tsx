"use client";
import { PageMarginContainer } from '@/app/PageMarginContainer'
import { stories } from '@/app/variables/story'
import { motion } from "motion/react"
import { BriefInfo } from './BriefInfo'
import { animateFadeUp, animateFromLeft, animateGradualSpacing } from '@/app/animation/animationVariants'
import { interFont } from '@/app/fonts/fontsConfig';

export const Story = () => {

    return (
        <div className='bg-blue relative min-h-[550px] flex justify-center items-center lg:py-[8rem] py-[4rem] overflow-hidden'>

            <motion.img
                animate={{ y: [0, 20, 0], }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}

                src='/images/graphics/pentagon-design.png' className='flex absolute left-0 right-0 top-0 bottom-0 opacity-5' />

            <div className='z-10 w-full h-full flex flex-col'>




                <PageMarginContainer>

                    <div className='text-gold flex flex-col gap-y-2'>
                        <div className={`degular-font-wide flex flex-wrap justify-center gap-x-1`}>
                            {"The Rach. Gabriels".split("").map((char, index) => (
                                <motion.h2
                                    // viewport={{ once: true }}
                                    key={`Welcome to${index}`}
                                    variants={animateGradualSpacing}
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    custom={index}
                                    exit="hidden"
                                    style={{ whiteSpace: "pre-wrap" }}
                                    className=' md:text-5xl text-3xl font-bold'
                                >
                                    {char}
                                </motion.h2>
                            ))}
                        </div>


                        <div className={`degular-font-wide flex flex-wrap justify-center gap-x-1`}>
                            {"Story".split("").map((char, index) => (
                                <motion.h2
                                    // viewport={{ once: true }}
                                    key={`Welcome to${index}`}
                                    variants={animateGradualSpacing}
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    custom={index}
                                    exit="hidden"
                                    style={{ whiteSpace: "pre-wrap" }}
                                    className=' md:text-5xl text-3xl font-bold'
                                >
                                    {char}
                                </motion.h2>
                            ))}
                        </div>
                    </div>

                    <div className='h-full flex md:flex-row flex-col md:gap-x-8 gap-y-8 rounded-xl shadow-xl p-[3.5px]'>



                        <motion.div
                            // viewport={{once: true}}
                            variants={animateFromLeft}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            custom={0.5}
                            className={`md:w-[1950px] md:h-auto w-[100%] h-[400px] flex flex-col overflow-hidden rounded-xl bg-gradient-to-b from-gray-800 to-black shadow-xl`}>

                            <img src='/images/pictures/IMG_2401.webp' alt='Story Image' className='w-full h-full object-cover -scale-x-[1]' />

                        </motion.div>




                        <div className='flex flex-col justify-between items-center gap-y-4 '>


                            <div className='w-full h-full grid xl:grid-cols-3 lg:grid-cols-2 gap-8'>
                                {stories.map((item, index) =>
                                    <motion.div
                                        // viewport={{once: true}}
                                        variants={animateFadeUp}
                                        initial={"offscreen"}
                                        whileInView={"onscreen"}
                                        custom={index * 0.2}
                                        key={`Story${index}`} className={`${stories.length - 1 === index && index % 3 !== 0 && "xl:col-span-1 lg:col-span-2"} w-full flex flex-col rounded-xl bg-gradient-to-b from-[#434357] to-[#0b0b0e]`}>

                                        <div className='bg-gold text-center py-2 px-8 font-bold text-gray-800 rounded-t-xl'>
                                            {item.year}
                                        </div>

                                        <p className='p-8'>
                                            {item.description}
                                        </p>

                                    </motion.div>
                                )}

                            </div>





                        </div>
                    </div>


                    <BriefInfo />


                </PageMarginContainer>
            </div>
        </div>
    )
}
