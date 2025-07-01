"use client";
import { PageMarginContainer } from '@/app/PageMarginContainer'
import { motion } from "motion/react";
import { animateFadeUp, animateGradualSpacing } from '@/app/animation/animationVariants';
import { interFont } from '@/app/fonts/fontsConfig';

export const OurCommitment = () => {
    return (
        <div className='relative flex lg:py-[8rem] py-[4rem] overflow-hidden bg-black'>

            <motion.div
                animate={{ y: [0, 50, 0], }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className='absolute -right-[200px] bottom-[105px]'>

                <img src="/images/graphics/ball-design.png" alt="" className='lg:w-[700px] w-[500px] rotate-180' />

            </motion.div>



            <div className='z-10 mx-auto'>
                <PageMarginContainer>
                    <div className='grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-x-12 lg:gap-y-0 gap-y-8'>

                        <div className='w-full h-full flex flex-col gap-y-4'>
                            <div className={`degular-font-wide flex flex-wrap`}>
                                {"Our".split("").map((char, index) => (
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

                            <div className={`degular-font-wide flex flex-wrap`}>
                                {"Commitment:".split("").map((char, index) => (
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


                            <motion.span
                                variants={animateFadeUp}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0.05}

                                className='text-gold'>
                                {" Bridging the Gap Between Luxury and Affordability"}
                            </motion.span>

                            <motion.p
                                variants={animateFadeUp}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0.25}
                            >
                                {"At Rach. Gabriels, we believe that high-quality fashion should be within everyone’s reach. Our approach focuses on: "}
                            </motion.p>

                            <motion.div
                                variants={animateFadeUp}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0.25}

                                className='mt-12 w-full h-[400px] flex flex-col bg-gradient-to-b from-[#434357] to-[#0b0b0e] hover:from-[#0b0b0e] hover:to-[#434357] rounded-[2.5rem] overflow-hidden'>

                                <div className='p-8'>
                                    <img src="/images/graphics/craft-shape.png" alt="shape" className='w-[400px] mx-auto' />

                                    <div className='flex flex-col gap-y-4'>

                                        <h4 className='text-gold text-xl text-center font-bold'>
                                            {"Premium Craftsmanship"}
                                        </h4>

                                        <p className='text-sm text-center'>
                                            {"Each pair of shoes is made with precision and superior materials."}
                                        </p>
                                    </div>
                                </div>

                            </motion.div>
                        </div>


                        <motion.div
                            variants={animateFadeUp}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            custom={0.15}
                            className='lg:mt-[150px] w-full h-[400px] flex flex-col bg-gradient-to-b from-[#434357] to-[#0b0b0e] hover:from-[#0b0b0e] hover:to-[#434357] rounded-[2.5rem] overflow-hidden'>

                            <div className='p-8'>
                                <img src="/images/graphics/pricing-shape.png" alt="shape" className='w-[400px] mx-auto' />

                                <div className='flex flex-col gap-y-4'>

                                    <h4 className='text-gold text-xl text-center font-bold'>
                                        {"Affordable Pricing"}
                                    </h4>

                                    <p className='text-sm text-center'>
                                        {"Luxury doesn’t have to be expensive. Our pricing model ensures you get premium footwear at a fraction of the cost."}
                                    </p>
                                </div>
                            </div>
                        </motion.div>


                        <motion.div
                            variants={animateFadeUp}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            custom={0.25}
                            className='lg:mt-[75px] w-full h-[400px] xl:col-span-1 lg:col-span-2 flex flex-col bg-gradient-to-b from-[#434357] to-[#0b0b0e] hover:from-[#0e0e11] hover:to-[#434357] rounded-[2.5rem] overflow-hidden'>

                            <div className='p-8'>
                                <img src="/images/graphics/empower-shape.png" alt="shape" className='w-[400px] mx-auto' />

                                <div className='flex flex-col gap-y-4'>

                                    <h4 className='text-gold text-xl text-center font-bold'>
                                        {"Empowering the Community"}
                                    </h4>

                                    <p className='text-sm text-center'>
                                        {"Through initiatives like Project 100, we are equipping young Nigerians with the skills to create and sell high-quality shoes, fostering economic empowerment."}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </PageMarginContainer>
            </div>



        </div>
    )
}
