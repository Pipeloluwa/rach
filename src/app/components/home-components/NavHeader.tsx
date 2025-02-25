"use client";
import React, { useEffect, useState } from 'react'
import LogoComponent from '../shared-components/LogoComponent'
import Link from 'next/link'
import { IActiveNav } from '@/app/interfaces/INavHeader';




export const NavHeader: React.FC<IActiveNav> = ({ activeTabValue }) => {
    const [activeTab, setActiveTab] = useState<string>("");


    useEffect(() => {
        setActiveTab(activeTabValue);
    }, [activeTabValue]);

    return (
        <ul className='z-50 h-[90px] flex justify-center items-center gap-x-4 sticky left-0 right-0 top-0 bg-black/50 backdrop-blur '>
            <Link href={"/"} className={`${activeTab === "home" ? "text-gold font-bold" : "text-gray-300"} cursor-pointer`}>
                {"Home"}
            </Link>

            <Link href={"/"} className='size-[90px]'>
                <LogoComponent />
            </Link>

            <Link href={"/project100"} className={`${activeTab === "project100" ? "text-gold font-bold" : "text-gray-300"} cursor-pointer`}>
                {"Project 100"}
            </Link>
        </ul>
    )
}
