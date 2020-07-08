import React from "react";

const Hero: React.FC = () => (
  <section className="hero is-primary is-bold is-fullheight-with-navbar">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">Minimum Effort</h1>
        <h2 className="subtitle">Semi-Hardcore Raiding Guild on Thrall</h2>
        <h2 className="subtitle">Tuesday and Thursday from 8-11PM EST</h2>
        <a
          className="button is-inverted is-large is-outlined is-primary"
          href="https://forms.gle/dtNBBHvuDTSDtziU6"
        >
          Apply Now
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
