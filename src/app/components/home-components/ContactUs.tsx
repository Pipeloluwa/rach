"use client";
import emailjs from '@emailjs/browser';
import { PageMarginContainer } from '@/app/PageMarginContainer'
import { motion } from 'motion/react'
import React, { RefObject, useRef, useState } from 'react'
import {  ResponseComponent } from '../shared-components/ResponseComponent';
import { interFont } from '@/app/fonts/fontsConfig';
import { animateFadeUp, animateGradualSpacing } from '@/app/animation/animationVariants';
import { FaFacebook, FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdMail } from 'react-icons/md';
import { RiInstagramFill } from 'react-icons/ri';
import Link from 'next/link';

export const ContactUs = () => {
    const form: RefObject<HTMLFormElement | null> = useRef(null);
    const [formProcessing, setFormProcessing] = useState<boolean>(false);
    const [mailDialog, setMailDialog] = useState("");

    const EMAIL_SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
    const EMAIL_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
    const EMAIL_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;

    const submitMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current && EMAIL_SERVICE_ID !== undefined && EMAIL_TEMPLATE_ID !== undefined && EMAIL_PUBLIC_KEY !== undefined) {
            setFormProcessing(true);
            await emailjs
                .sendForm(EMAIL_SERVICE_ID!, EMAIL_TEMPLATE_ID!, form.current, {
                    publicKey: EMAIL_PUBLIC_KEY,
                })
                .then(
                    () => {
                        setMailDialog("Successful");
                    },
                    (error) => {
                        setMailDialog("Sorry, could not send information, something went wrong");
                        console.log('FAILED...', error);
                    },
                ).catch((error) => {
                    setMailDialog("Sorry, could not send information, something went wrong");
                    console.log(error);
                });

            setFormProcessing(false);
        }

    }







    return (
        <div className='w-full lg:py-[8rem] py-[4rem] overflow-hidden bg-black'>

            <PageMarginContainer>
                <div className='w-full relative flex justify-center  gap-x-24'>


                    <motion.div
                        animate={{ y: [0, 50, 0], }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className='absolute -right-[400px] -bottom-[10px]'>

                        <img src="/images/graphics/ball-design.png" alt="" className='w-[1000px] rotate-180' />

                    </motion.div>


                    <motion.div
                        animate={{ x: [0, 50, 0], }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className='absolute -left-[250px] bottom-0'>

                        <img src="/images/graphics/shapes-design2.png" alt="" className='w-[400px] h-full flex object-cover' />

                    </motion.div>



                    <div className='z-10 w-full flex flex-col'>

                        <div className='w-[500px] flex flex-col gap-y-4'>
                            <div className={`degular-font-wide flex flex-wrap`}>
                                {"Contact Us".split("").map((char, index) => (
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


                            <motion.ul
                                variants={animateFadeUp}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0.25}

                                className='flex flex-col'>
                                <li className='flex gap-x-2 items-center'>
                                    <FaPhoneAlt />

                                    <p>
                                        {"08036109271"}
                                    </p>

                                </li>

                                <li className='flex gap-x-2 items-center'>
                                    <FaLocationDot />

                                    <p>
                                        {"39, Janet Akitola Street, Marshy Hills Estate, Ajah, Lagos"}
                                    </p>


                                </li>


                                <li className='flex gap-x-2 items-center'>
                                    <MdMail />

                                    <Link href='mailto:Info@rachgabriels.com.ng'>
                                        {"info@rachgabriels.com.ng"}
                                    </Link>

                                </li>

                                <li className='flex gap-x-2 items-center'>
                                <FaFacebook />

                                    <Link href='https://www.instagram.com/rach.gabriels?igsh=eTJyYm9icDRtcGJv&utm_source=qr' target="_blank" rel="noopener noreferrer">
                                        {"Rach. Gabriels Fashion Company"}
                                    </Link>

                                </li>

                                <li className='flex gap-x-2 items-center'>
                                <RiInstagramFill />

                                    <Link href='https://www.instagram.com/rach.gabriels?igsh=eTJyYm9icDRtcGJv&utm_source=qr' target="_blank" rel="noopener noreferrer">
                                        {"rach.gabriels"}
                                    </Link>

                                </li>
                            </motion.ul>

                        </div>



                        <motion.form
                            ref={form}
                            onSubmit={submitMessage}
                            variants={animateFadeUp}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            custom={0.25}

                            className="w-full mt-8 flex flex-col justify-between gap-y-4 lg:p-12 p-6 bg-gray-700 rounded-[2.5rem]">

                            <input name='message_type' defaultValue={"Tour"} className='hidden' />

                            <motion.div
                                viewport={{ once: true }}
                                variants={animateFadeUp}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0}
                            >
                                <input
                                    placeholder="Name" required type="text"
                                    name="from_name"
                                    className='w-full bg-transparent lg:px-4 h-[50px] outline-none border-b'
                                />
                            </motion.div>


                            <motion.div
                                viewport={{ once: true }}
                                variants={animateFadeUp}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0.1}
                            >
                                <input
                                    placeholder="Email" required type="email"
                                    name="from_email"
                                    className='w-full bg-transparent lg:px-4 h-[50px] outline-none border-b'
                                />
                            </motion.div>


                            <motion.div
                                viewport={{ once: true }}
                                variants={animateFadeUp}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0.2}
                            >
                                <input
                                    placeholder="Phone Number" required type="tel"
                                    name="from_phone"
                                    // pattern="\+[0-9]{1,3}[0-9]{10}"
                                    className='w-full bg-transparent lg:px-4 h-[50px] outline-none border-b'
                                />
                            </motion.div>


                            <motion.div
                                viewport={{ once: true }}
                                variants={animateFadeUp}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0.3}
                            >
                                <textarea
                                    placeholder="Any Important Information?"
                                    name="message"
                                    className='w-full bg-white/10 lg:px-4 h-[100px] outline-none'
                                />
                            </motion.div>


                            <motion.div
                                viewport={{ once: true }}
                                variants={animateFadeUp}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0.4}
                            >
                                <button
                                    type='submit'
                                    disabled={formProcessing}
                                    className={`${formProcessing ? "pointer-events-none" : "pointer-events-auto"} tracking-widest text-[15px] bg-gray-900 big-button sm:hover:bg-[#f0f0f0]
                text-white sm:hover:text-orange-800 sm:hover:transition-colors hover:ease-linear sm:hover:duration-500`}
                                >

                                    <span className={`degular-font-wide capitalize`}>
                                        {formProcessing ? "Sending..." : "Send"}
                                    </span>
                                </button>
                            </motion.div>



                            <ResponseComponent mailDialog={mailDialog} setMailDialog={setMailDialog} />


                        </motion.form>

                    </div>

                </div>
            </PageMarginContainer>
        </div>
    )
}
