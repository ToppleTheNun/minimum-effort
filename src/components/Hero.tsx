import React from "react";
import { RaiderIoRaidProgression } from "../types/raiderIO";
import RaidProgression from "./RaidProgression";

interface HeroProps {
  raidProgression: RaiderIoRaidProgression;
}

const Hero: React.FC<HeroProps> = ({ raidProgression }) => (
  <section className="body-font h-screen nathria-background text-white w-screen">
    <div className="container px-8 m-auto lg:px-4 h-full w-full">
      <div className="flex flex-col h-full w-full justify-center items-center text-left">
        <h1 className="mb-1 my-auto text-2xl font-semibold tracking-tighter sm:text-6xl title-font">
          Minimum Effort
        </h1>
        <h2 className="mb-3 text-xl text-base font-medium leading-relaxed sm:text-2xl">
          Thrall (Horde)
        </h2>
        <h2 className="mb-3 text-xl text-base font-medium leading-relaxed sm:text-2xl">
          Tuesday, Wednesday, and Thursday from 8-11PM EST
        </h2>
        <RaidProgression raidProgression={raidProgression} />
        <a
          className="s:w-full md:w-1/4 flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-black md:py-4 md:text-lg md:px-10"
          href="https://docs.google.com/forms/d/e/1FAIpQLSf8j1h6C_oF9Iv6EaSpZsa5n76qV1QTguVnnVjByD9R3pxMpw/viewform"
        >
          Apply Now
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
