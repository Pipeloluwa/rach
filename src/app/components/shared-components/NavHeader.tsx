"use client";
import React, { useEffect, useState } from 'react'
import LogoComponent from './LogoComponent'
import Link from 'next/link'
import { IActiveNav } from '@/app/interfaces/INavHeader';
import { TiThMenu } from 'react-icons/ti';
import { IoCloseSharp } from 'react-icons/io5';
import { motion } from 'motion/react';
import { animateFromRight } from '@/app/animation/animationVariants';




export const NavHeader: React.FC<IActiveNav> = ({ activeTabValue }) => {
    const [activeTab, setActiveTab] = useState<string>("");
    let logoUrls = new Map<string, string>();
    logoUrls.set("home", "RG LOGO.png");
    logoUrls.set("about-us", "RG LOGO.png");
    logoUrls.set("project100", "PROJECT 100 LOGO_.png");


    useEffect(() => {
        setActiveTab(activeTabValue);
    }, [activeTabValue]);



    const [openDrawer, setOpenDrawer] = useState<boolean>(false);

    const openDrawer_ = () => {

        setOpenDrawer(true);
        document.body.style.overflow = "hidden";
    }

    const closeDrawer_ = () => {
        setOpenDrawer(false);
        document.body.style.overflow = "unset";
    }

    return (
        <ul className='z-50 h-[90px] flex justify-center items-center gap-x-4 md:px-12 px-4 sticky left-0 right-0 top-0 bg-black/50 backdrop-blur '>

            <div className='w-[100px]'>
                <LogoComponent path={`${logoUrls.get(activeTab)}`} />
            </div>





            {
                openDrawer
                &&

                <div onClick={() => { closeDrawer_() }} className='backdrop-blur-lg bg-black/60 lg:hidden flex z-50 h-screen w-screen fixed top-0 bottom-0 right-0 left-0 justify-end '>

                    <motion.div
                        onClick={(e) => { e.stopPropagation() }} 
                        variants={animateFromRight}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        custom={0}
                        className='h-full w-[50%] flex flex-col gap-y-2 md:pl-16 pl-2 md:pr-[60px] pr-[16px] pt-5 rounded-l-2xl bg-gradient-to-b from-gray-800 to-black'
                        >
                        

                        <div className='h-[52px] w-full flex justify-end'>

                            <IoCloseSharp onClick={() => { closeDrawer_() }} className="cursor-pointer text-white size-[50px]" />

                        </div>


                        <div className='w-full flex flex-col'>
                            <Link href={"/"} className={`${activeTab === "home" ? "text-gold font-bold" : "text-gray-300 lg:hover:bg-gray-700"} rounded-xl block px-4 py-3 cursor-pointer`}>
                                {"Home"}
                            </Link>

                            <Link href={"/about-us"} className={`${activeTab === "about-us" ? "text-gold font-bold" : "text-gray-300 lg:hover:bg-gray-700"} rounded-xl block px-4 py-3 cursor-pointer`}>
                                {"About Us"}
                            </Link>

                            <Link href={"/project-centum"} className={`${activeTab === "project100" ? "text-gold font-bold" : "text-gray-300 lg:hover:bg-gray-700"} rounded-xl block px-4 py-3 cursor-pointer`}>
                                {"Project Centum"}
                            </Link>
                        </div>

                    </motion.div>


                </div>
            }



            <div className='w-full h-[52px] lg:hidden flex justify-end items-center'>
                {
                    !openDrawer
                    && <TiThMenu onClick={() => { openDrawer_() }} className="cursor-pointer text-white size-[45px]" />
                }
            </div>



            <div className='w-full lg:flex hidden justify-center items-center gap-x-2 px-4'>

                <Link href={"/"} className={`${activeTab === "home" ? "text-gold font-bold" : "text-gray-300 lg:hover:bg-gray-700"} rounded-xl block px-4 py-3 cursor-pointer`}>
                    {"Home"}
                </Link>

                <Link href={"/about-us"} className={`${activeTab === "about-us" ? "text-gold font-bold" : "text-gray-300 lg:hover:bg-gray-700"} rounded-xl block px-4 py-3 cursor-pointer`}>
                    {"About Us"}
                </Link>

                <Link href={"/project-centum"} className={`${activeTab === "project100" ? "text-gold font-bold" : "text-gray-300 lg:hover:bg-gray-700"} rounded-xl block px-4 py-3 cursor-pointer`}>
                    {"Project Centum"}
                </Link>

            </div>









            {/* <Link href={"/project-centum"} className={`${activeTab === "project100" ? "text-gold font-bold" : "text-gray-300"} cursor-pointer`}>
                {"Project Centum"}
            </Link> */}

            {/* <li className="relative group">
                <p className={`${activeTab === "project100" || activeTab === "about-us" ? "text-gold font-bold" : "text-gray-300"} cursor-pointer`}>
                    {"Pages"}
                </p>

                <ul className="w-[150px] absolute -left-[90%] hidden group-hover:block bg-gray-800 text-white rounded overflow-hidden shadow-md text-sm">
                   <li>
                        <Link href={"/about-us"} className={`${activeTab === "about-us" ? "text-gold font-bold" : "text-gray-300 hover:bg-gray-700"} block px-4 py-4 cursor-pointer`}>
                            {"About Us"}
                        </Link>
                        
                    </li>

                    <li>
                        <Link href={"/project-centum"} className={`${activeTab === "project100" ? "text-gold font-bold" : "text-gray-300 hover:bg-gray-700"} block px-4 py-4 cursor-pointer`}>
                            {"Project Centum"}
                        </Link>
                        
                    </li>

                </ul>
            </li> */}
        </ul>
    )
}
