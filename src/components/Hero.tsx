import React from "react";

const Hero: React.FC = () => (
  <section className="hero is-fullheight nzoth-background">
    <div className="hero-body">
      <div className="container">
        <h1 className="title text-white">Minimum Effort</h1>
        <h2 className="subtitle text-white">Thrall (Horde)</h2>
        <h2 className="subtitle text-white">
          Tuesday, Wednesday, and Thursday from 8-11PM EST
        </h2>
        <a
          className="button is-inverted is-large is-outlined is-primary"
          href="https://docs.google.com/forms/d/e/1FAIpQLSccN2RsqWGMNWG8mKunlsf0x-cS8aZQupGktD9m8f89UAE_aQ/viewform"
        >
          Apply Now
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
