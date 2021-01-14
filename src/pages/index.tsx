import React from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";

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
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
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
