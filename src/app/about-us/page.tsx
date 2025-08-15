"use client";
import { ABoutUsInfo } from "../components/about-component/AboutUsInfo";
import { CardBackgroundComponent } from "../components/shared-components/CardBackgroundComponent";
import { NavHeader } from "../components/shared-components/NavHeader";


export default function About() {
    return (
        <div className="h-screen w-screen overflow-hidden overflow-y-scroll">
            <NavHeader activeTabValue="about-us"/>
            <CardBackgroundComponent imagePath='/images/pictures/IMG_1993.webp' title='About Us'/>
            <ABoutUsInfo />

        </div>
    );
}
