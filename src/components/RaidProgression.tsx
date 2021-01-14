import React from "react";

import useSWR from "swr";
import { fetchGuildProgression } from "../api/raiderIO";
import { RaiderIoRaidProgression } from "../types/raiderIO";

type RaidProgressionProps = {
  raidProgression: RaiderIoRaidProgression;
};

const raids = [{ slug: "castle-nathria", title: "Castle Nathria" }];

const RaidProgression: React.FC<RaidProgressionProps> = ({
  raidProgression,
}) => {
  const { data } = useSWR("/v1/guilds/profile", fetchGuildProgression, {
    initialData: raidProgression,
  });

  return (
    <>
      {raids.map((raid) => (
        <h2 className="subtitle text-white" key={raid.slug}>
          {raid.title} - {data[raid.slug].summary}
        </h2>
      ))}
    </>
  );
};

export default RaidProgression;
