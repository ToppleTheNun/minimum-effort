import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";

import Hero from "../components/Hero";
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
    revalidate: 300, // number of seconds between polls
  };
};

const HomePage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  guildProfileResponse,
}) => {
  return (
    <>
      <Hero raidProgression={guildProfileResponse.raid_progression} />
    </>
  );
};

export default HomePage;
