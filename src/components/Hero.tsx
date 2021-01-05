import React from "react";
import { RaiderIoRaidProgression } from "../types/raiderIO";
import RaidProgression from "./RaidProgression";

interface HeroProps {
  raidProgression: RaiderIoRaidProgression;
}

const Hero: React.FC<HeroProps> = ({ raidProgression }) => (
  <section className="hero is-fullheight nathria-background">
    <div className="hero-body">
      <div className="container">
        <h1 className="title text-white">Minimum Effort</h1>
        <h2 className="subtitle text-white">Thrall (Horde)</h2>
        <h2 className="subtitle text-white">
          Tuesday, Wednesday, and Thursday from 8-11PM EST
        </h2>
        <RaidProgression raidProgression={raidProgression} />
        <a
          className="button is-inverted is-large is-outlined is-primary"
          href="https://docs.google.com/forms/d/e/1FAIpQLSf8j1h6C_oF9Iv6EaSpZsa5n76qV1QTguVnnVjByD9R3pxMpw/viewform"
        >
          Apply Now
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
