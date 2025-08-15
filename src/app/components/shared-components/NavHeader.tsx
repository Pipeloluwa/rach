"use client";
import React, { useEffect, useState } from 'react'
import LogoComponent from './LogoComponent'
import Link from 'next/link'
import { IActiveNav } from '@/app/interfaces/INavHeader';




export const NavHeader: React.FC<IActiveNav> = ({ activeTabValue }) => {
    const [activeTab, setActiveTab] = useState<string>("");
    let logoUrls= new Map<string, string>();
    logoUrls.set("home", "RG LOGO.png");
    logoUrls.set("about-us", "RG LOGO.png");
    logoUrls.set("project100", "PROJECT 100 LOGO_.png");


    useEffect(() => {
        setActiveTab(activeTabValue);
    }, [activeTabValue]);

    return (
        <ul className='z-50 h-[90px] flex justify-center items-center gap-x-4 sticky left-0 right-0 top-0 bg-black/50 backdrop-blur '>
            <Link href={"/"} className={`${activeTab === "home" ? "text-gold font-bold" : "text-gray-300"} cursor-pointer`}>
                {"Home"}
            </Link>

            <div className='h-[70px]'>
                <LogoComponent path={`${logoUrls.get(activeTab)}`}/>
            </div>

            {/* <Link href={"/project-centum"} className={`${activeTab === "project100" ? "text-gold font-bold" : "text-gray-300"} cursor-pointer`}>
                {"Project Centum"}
            </Link> */}

            <li className="relative group">
                <p className={`${activeTab === "project100" || activeTab === "about-us" ? "text-gold font-bold" : "text-gray-300"} cursor-pointer`}>
                    {"Pages"}
                </p>

                <ul className="w-[150px] absolute -left-[90%] hidden group-hover:block bg-gray-800 text-white rounded overflow-hidden shadow-md">
                   <li>
                        <Link href={"/about-us"} className={`${activeTab === "about-us" ? "text-gold font-bold" : "text-gray-300 hover:bg-gray-700"} block px-4 py-2 cursor-pointer text-sm`}>
                            {"About Us"}
                        </Link>
                        
                    </li>

                    <li>
                        <Link href={"/project-centum"} className={`${activeTab === "project100" ? "text-gold font-bold" : "text-gray-300 hover:bg-gray-700"} block px-4 py-2 cursor-pointer text-sm`}>
                            {"Project Centum"}
                        </Link>
                        
                    </li>

                </ul>
            </li>
        </ul>
    )
}
