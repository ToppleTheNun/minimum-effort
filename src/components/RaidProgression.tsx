import React, { useMemo } from "react";

import { RaiderIoRaidProgression } from "../types/raiderIO";

type RaidProgressionProps = {
  raidProgression: RaiderIoRaidProgression;
};

const raids = [{ slug: "castle-nathria", title: "Castle Nathria" }];

const RaidProgression: React.FC<RaidProgressionProps> = ({
  raidProgression,
}) => {
  const availableRaids = useMemo(
    () => raids.filter((raid) => raidProgression[raid.slug]),
    [raidProgression]
  );

  return (
    <>
      {availableRaids.map((raid) => (
        <h2 className="subtitle text-white" key={raid.slug}>
          {raid.title} - {raidProgression[raid.slug].summary}
        </h2>
      ))}
    </>
  );
};

export default RaidProgression;
