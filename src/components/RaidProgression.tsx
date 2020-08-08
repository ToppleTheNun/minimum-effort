import React, { useMemo } from "react";
import { RaiderIoRaidProgression } from "../types/raiderIO";
import RaidProgressCard from "./RaidProgressCard";

type RaidProgressionProps = {
  raidProgression: RaiderIoRaidProgression;
};

const raids = [
  { slug: "the-eternal-palace", title: "The Eternal Palace" },
  { slug: "nyalotha-the-waking-city", title: "Nya'lotha the Waking City" },
];

const RaidProgression: React.FC<RaidProgressionProps> = ({
  raidProgression,
}) => {
  const availableRaids = useMemo(
    () => raids.filter((raid) => raidProgression[raid.slug]),
    [raidProgression]
  );

  return (
    <section className="horde-gradient-background section">
      <div className="container">
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
