import React from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";

import Hero from "../components/Hero";
import RaidProgression from "../components/RaidProgression";
import { RaiderIoGuildProfileResponse } from "../types/raiderIO";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    "https://raider.io/api/v1/guilds/profile?region=us&realm=Thrall&name=Minimum%20Effort&fields=raid_progression"
  );
  const raiderIoGuildProfileResponse: RaiderIoGuildProfileResponse = await res.json();

  return {
    props: {
      guildProfileResponse: raiderIoGuildProfileResponse,
    },
    revalidate: 1, // number of seconds between polls
  };
};

const HomePage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  guildProfileResponse,
}) => {
  return (
    <>
      <Hero />
      <RaidProgression
        raidProgression={guildProfileResponse.raid_progression}
      />
    </>
  );
};

export default HomePage;
