import React from "react";

import useSWR from "swr";
import { fetchGuildProgression } from "../api/raiderIO";
import { RaiderIoRaidProgression } from "../types/raiderIO";

type RaidProgressionProps = {
  raidProgression: RaiderIoRaidProgression;
};

const raids = [
  { slug: "sanctum-of-domination", title: "Sanctum of Domination" },
];

const RaidProgression: React.FC<RaidProgressionProps> = ({
  raidProgression,
}) => {
  const { data } = useSWR("/v1/guilds/profile", fetchGuildProgression, {
    initialData: raidProgression,
  });

  return (
    <>
      {raids.map((raid) => (
        <h2
          className="mb-3 text-xl text-base font-medium leading-relaxed sm:text-2xl"
          key={raid.slug}
        >
          {raid.title} - {data[raid.slug].summary}
        </h2>
      ))}
    </>
  );
};

export default RaidProgression;
