import React from "react";
import { Helmet } from "react-helmet";

import Hero from "../components/Hero";

import "../index.scss";
import { RaiderIoGuildProfileResponse } from "../types";
import RaidProgression from "../components/RaidProgression";

type HomePageProps = {
  pageContext: { guildProfileResponse: RaiderIoGuildProfileResponse };
};

const HomePage: React.FC<HomePageProps> = ({
  pageContext: { guildProfileResponse },
}) => {
  return (
    <>
      <Helmet>
        <title>Minimum Effort</title>
      </Helmet>
      <Hero />
      <RaidProgression
        raidProgression={guildProfileResponse.raid_progression}
      />
    </>
  );
};

export default HomePage;
