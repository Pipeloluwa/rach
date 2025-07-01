"use client"
import { OurCommitment } from "./components/home-components/OurCommitment";
import { Story } from "./components/home-components/Story";
import { Project100 } from "./components/shared-components/Project100";
import { ApproachSustain } from "./components/shared-components/ApproachSustain";
import { JoinMovement } from "./components/home-components/JoinMovement";
import { ContactUs } from "./components/home-components/ContactUs";
import { Gallery } from "./components/home-components/Gallery";
import WelcomeScreen from "./components/home-components/WelcomeScreen";
import { NavHeader } from "./components/home-components/NavHeader";

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-hidden overflow-y-scroll">


      <NavHeader activeTabValue="home"/>
      <WelcomeScreen />
      <Story />
      <OurCommitment />
      <Project100 projectValue={"Project 100"}/>
      <ApproachSustain />
      <JoinMovement />
      <ContactUs />
      <Gallery />
    
    </div>
  );
}
