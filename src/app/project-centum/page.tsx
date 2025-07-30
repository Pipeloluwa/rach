"use client"
import { ContactUs } from "../components/home-components/ContactUs";
import { Gallery } from "../components/home-components/Gallery";
import { NavHeader } from "../components/shared-components/NavHeader";
import { DownloadProject } from "../components/project100-component/DownloadProject";
import { ApproachSustain } from "../components/shared-components/ApproachSustain";
import { CardBackgroundComponent } from "../components/shared-components/CardBackgroundComponent";
import { Project100 } from "../components/shared-components/Project100";


export default function Page100() {


    return (
        <div className="h-screen w-screen overflow-hidden overflow-y-scroll">
            <NavHeader activeTabValue="project100"/>

            <CardBackgroundComponent imagePath='/images/pictures/IMG_2018.webp' title='Project Centum' />
            <Project100 projectValue={null}/>
            <ApproachSustain />
            <DownloadProject />
            <Gallery />
            <ContactUs />

        </div>
    );
}