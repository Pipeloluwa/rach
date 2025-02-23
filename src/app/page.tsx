"use client"
import { OurCommitment } from "./components/home-components/OurCommitment";
import { Story } from "./components/home-components/Story";
import { Project100 } from "./components/home-components/Project100";
import { ApproachSustain } from "./components/home-components/ApproachSustain";
import { JoinMovement } from "./components/home-components/JoinMovement";
import { ContactUs } from "./components/home-components/ContactUs";
import { Gallery } from "./components/home-components/Gallery";
import WelcomeScreen from "./components/home-components/WelcomeScreen";

export default function Home() {
  return (
    <div >
      <WelcomeScreen />
      <Story />
      <OurCommitment />
      <Project100 />
      <ApproachSustain />
      <JoinMovement />
      <Gallery />
      <ContactUs />

    </div>
  );
}
