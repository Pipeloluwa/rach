"use client";
import { PageMarginContainer } from '@/app/PageMarginContainer'
import { stories } from '@/app/variables/story'
import { motion } from "motion/react"
import { BriefInfo } from './BriefInfo'
import { animateFadeUp, animateFromLeft, animateGradualSpacing } from '@/app/animation/animationVariants'
import { interFont } from '@/app/fonts/fontsConfig';

export const Story = () => {

    const aboutUs = [
        `Wale Fakile is a globally experienced journalist and Senior presenter with the BBC, renowned for his clarity, investigative depth, and compelling storytelling on African and Nigerian issues. With over a decade of experience spanning journalism, communications strategy, and brand development, Wale brings a powerful blend of media insight and purposeful leadership to every venture.`,
        `He is the founder of Rach. Gabriels Fashion Company, a proudly Nigerian shoemaking brand rooted in excellence, dignity, and sustainable empowerment. Under his leadership, the brand has grown from a fashion label into a social impact platform.`,
        `He started Project Centum, a flagship initiative of Rach. Gabriels to train and equip 100 underserved youths annually for the next 5 years with shoemaking and entrepreneurship skills. It is a bold, national model for grassroots transformation, empowering young Nigerians with the tools to create, thrive, and lead in their communities.`,
        `Wale also leads Propagar Media, Nigeria’s first AI-powered PR and communications company, where he is pioneering the future of precise and strategic communications.`,
        `His unique combination of editorial excellence, brand clarity, and social innovation drives the impact of his projects across sectors.`,
        `At the heart of his work lies a deep belief: that when skill, strategy, and spirit align, transformation becomes inevitable, not just for individuals, but for entire communities.`
    ];


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
                            className={`md:w-[30%] md:h-auto w-[100%] h-[400px] flex flex-col overflow-hidden rounded-xl bg-gradient-to-b from-gray-800 to-black shadow-xl`}>

                            <img src='/images/pictures/ceo.webp' alt='Story Image' className='w-full h-full object-cover object-top' />

                        </motion.div>




                        <div className='md:w-[70%] w-full flex flex-col gap-y-4 '>

                            <motion.h4
                                variants={animateFadeUp}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0.1}
                                className='text-white text-sm'
                            >
                                <span className='text-xl text-gold font-bold'>{"Wale Fakile"}</span>
                                <br /> <span>{"(Founder, Rach. Gabriels & Visionary Behind Project Centum)"}</span>
                                <br /> <span>{"International Broadcast Journalist | Comms/Media Tech Strategist | Branding Expert | AI & Youth Empowerment Advocate"}</span>
                            </motion.h4>

                            {
                                aboutUs.map((text, index) => (
                                    <motion.p
                                        variants={animateFadeUp}
                                        initial={"offscreen"}
                                        whileInView={"onscreen"}
                                        custom={index * 0.1}
                                        key={`aboutUs-${index}`}
                                        className={`text-white text-sm ${interFont.className}`}
                                    >
                                        {text}
                                    </motion.p>
                                ))
                            }
                        </div>
                    </div>


                    <BriefInfo />


                </PageMarginContainer>
            </div>
        </div>
    )
}
