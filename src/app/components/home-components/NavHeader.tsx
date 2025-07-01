"use client";
import React, { useEffect, useState } from 'react'
import LogoComponent from '../shared-components/LogoComponent'
import Link from 'next/link'
import { IActiveNav } from '@/app/interfaces/INavHeader';




export const NavHeader: React.FC<IActiveNav> = ({ activeTabValue }) => {
    const [activeTab, setActiveTab] = useState<string>("");
    let logoUrls= new Map<string, string>();
    logoUrls.set("home", "RG LOGO.png");
    logoUrls.set("project100", "PROJECT 100 LOGO.png");


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

            <Link href={"/project100"} className={`${activeTab === "project100" ? "text-gold font-bold" : "text-gray-300"} cursor-pointer`}>
                {"Project 100"}
            </Link>
        </ul>
    )
}
