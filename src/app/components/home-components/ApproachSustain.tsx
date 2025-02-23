"use client";
import { animateFromLeft, animateFromRight, animateFadeUp } from '@/app/animation/animationVariants'
import { PageMarginContainer } from '@/app/PageMarginContainer'
import { motion } from 'motion/react'

export const ApproachSustain = () => {
    return (
        <div className='bg-blue w-full min-h-screen lg:py-[8rem] py-[4rem] overflow-hidden'>

            <PageMarginContainer>
                <div className='w-full relative flex items-center gap-x-24'>


                    <motion.div
                        animate={{ y: [0, 50, 0], }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className='absolute -right-[200px] -top-[150px] opacity-[20%] rotate-180 scale-75'>

                        <img src="/images/graphics/pentagon-design.png" alt="" className='w-full h-full flex object-cover' />

                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 50, 0], }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className='absolute -left-[200px] -top-[150px] opacity-[20%]'>

                        <img src="/images/graphics/pentagon-design.png" alt="" className='w-full h-full flex object-cover' />

                    </motion.div>




                    <div className='flex flex-col'>

                        <div className='flex lg:flex-row flex-col lg:gap-x-8 lg:gap-y-0 gap-y-8 justify-center'>

                            <motion.div
                                variants={animateFromLeft}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0.25}


                                className='lg:mt-16 flex flex-col gap-y-6'>
                                <h4 className="font-bold text-3xl">
                                    {"Our Approach"}
                                </h4>

                                <ul className='list-decimal font-bold flex flex-col gap-y-4  pl-4'>
                                    <li>
                                        <h5 className='mb-2 text-xl'>
                                            {"Phase 1: Selection and Training"}
                                        </h5>

                                        <p className='font-normal'>
                                            {"We identify promising young talents and equip them with practical shoemaking and business skills."}
                                        </p>
                                    </li>


                                    <li>
                                        <h5 className='mb-2 font-bold text-xl'>
                                            {"Phase 2: Mentorship and Industry Exposure"}
                                        </h5>

                                        <p className='font-normal'>
                                            {"Trainees are connected with experienced mentors and given opportunities to gain hands-on experience in the industry."}
                                        </p>
                                    </li>


                                    <li>
                                        <h5 className='mb-2 font-bold text-xl'>
                                            {"Phase 3: Market Entry and Business Support"}
                                        </h5>

                                        <p className='font-normal'>
                                            {"Graduates receive support to launch their own brands, secure jobs, or collaborate with leading fashion houses."}
                                        </p>
                                    </li>


                                </ul>

                            </motion.div>





                            <div>
                                <motion.div
                                    animate={{ x: [0, 10, 0], }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className='lg:flex hidden 2xl:size-[450px] size-[450px]  bg-gradient-to-b from-blue-400 via-white to-blue-100 rounded-[4.5rem] overflow-hidden'>
                                    <img src="/images/pictures/IMG_1683.webp" alt="" className='w-full h-full flex object-cover' />
                                </motion.div>

                            </div>


                            <motion.div
                                animate={{ x: [-25, 25, -25], }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className='lg:hidden flex lg:w-[450px] size-[400px] w-full  bg-gradient-to-b from-blue-400 via-white to-blue-100 rounded-[4.5rem] overflow-hidden'>
                                <img src="/images/pictures/IMG_1683.webp" alt="" className='w-full h-full flex object-cover' />
                            </motion.div>





                            <motion.div
                                variants={animateFromRight}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0.25}

                                className='mt-16 flex flex-col gap-y-6'>

                                <h4 className="font-bold text-3xl">
                                    {"Impact and Sustainability"}
                                </h4>

                                <ul className='flex flex-col gap-y-4 list-disc pl-4'>
                                    <li>
                                        <h5 className='mb-2 font-bold text-xl'>
                                            {"Self-Sustaining Mode"}
                                        </h5>
                                        {"Trained participants reinvest in the program, helping train future cohorts."}
                                    </li>


                                    <li>
                                        <h5 className='mb-2 font-bold text-xl'>
                                            {"Partnerships"}
                                        </h5>
                                        {"We collaborate with NGOs, private organizations, and government agencies to expand reach and impact."}
                                    </li>


                                    <li>
                                        <h5 className='mb-2 font-bold text-xl'>
                                            {"Scaling for the Future"}
                                        </h5>
                                        {"We aim to grow Project 100 beyond our first 100 participants, extending opportunities to thousands of aspiring entrepreneurs across Nigeria."}
                                    </li>


                                </ul>

                            </motion.div>

                        </div>



                        <motion.p
                            variants={animateFadeUp}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            custom={0.25}

                            className='mt-12 lg:text-center lg:w-[75%] lg:mx-auto'>
                            {"Over the next five years, we will train 500 young Nigerians the art of shoemaking and replicate our model across other crafts like garment making and design, woodworking, filming etc."}
                        </motion.p>

                    </div>

                </div>
            </PageMarginContainer>
        </div>
    )
}
