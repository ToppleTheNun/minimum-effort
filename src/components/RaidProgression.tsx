import React, { useMemo } from "react";

import { RaiderIoRaidProgression } from "../types/raiderIO";
import RaidProgressCard from "./RaidProgressCard";

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
    <section className="section">
      <div className="container">
        <h1 className="title text-white">Raid Progression</h1>
        <div className="columns">
          {availableRaids.map((raid) => (
            <div className="column" key={raid.slug}>
              <RaidProgressCard
                raidProgress={raidProgression[raid.slug]}
                raidTitle={raid.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RaidProgression;
