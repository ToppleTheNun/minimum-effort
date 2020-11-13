import React from "react";

const Hero: React.FC = () => (
  <section className="hero is-fullheight nzoth-background">
    <div className="hero-body">
      <div className="container">
        <h1 className="title text-white">Minimum Effort</h1>
        <h2 className="subtitle text-white">
          Semi-Hardcore Raiding Guild on Thrall (Horde)
        </h2>
        <h2 className="subtitle text-white">
          Tuesday, Wednesday, and Thursday from 8-11PM EST
        </h2>
        <a
          className="button is-inverted is-large is-outlined is-primary"
          href="https://forms.gle/sRnhWeyeqtn4VLB48"
        >
          Apply Now
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
