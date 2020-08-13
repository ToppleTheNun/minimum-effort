import React from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";

import Hero from "../components/Hero";
import RaidProgression from "../components/RaidProgression";
import { RaiderIoGuildProfileResponse } from "../types/raiderIO";
import Roster from "../components/Roster";
import { RosterByRole } from "../types/blizzard";
import { getCharacterAndSpecGroupedBy } from "../data/blizzardApiCache";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    "https://raider.io/api/v1/guilds/profile?region=us&realm=Thrall&name=Minimum%20Effort&fields=raid_progression"
  );
  const raiderIoGuildProfileResponse: RaiderIoGuildProfileResponse = await res.json();
  let members: RosterByRole;
  try {
    members = await getCharacterAndSpecGroupedBy();
  } catch (err) {
    members = { tank: [], healer: [], damage: [] };
  }

  return {
    props: {
      guildProfileResponse: raiderIoGuildProfileResponse,
      members,
    },
    revalidate: 300, // number of seconds between polls
  };
};

const HomePage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  guildProfileResponse,
  members,
}) => {
  return (
    <>
      <Hero />
      <RaidProgression
        raidProgression={guildProfileResponse.raid_progression}
      />
      <Roster members={members} />
    </>
  );
};

export default HomePage;
