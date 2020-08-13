import React from "react";

import { RaiderIoRaidProgress } from "../types/raiderIO";

type RaidProgressCardProps = {
  raidProgress: RaiderIoRaidProgress;
  raidTitle: string;
};

const RaidProgressCard: React.FC<RaidProgressCardProps> = ({
  raidProgress,
  raidTitle,
}) => (
  <div className="card">
    <div className="card-content">
      <p className="title">{raidTitle}</p>
      <p className="subtitle">
        Mythic - {raidProgress.mythic_bosses_killed}/{raidProgress.total_bosses}
      </p>
      <progress
        className="progress"
        value={raidProgress.mythic_bosses_killed}
        max={raidProgress.total_bosses}
      >
        {raidProgress.mythic_bosses_killed}/{raidProgress.total_bosses}
      </progress>
      <p className="subtitle">
        Heroic - {raidProgress.heroic_bosses_killed}/{raidProgress.total_bosses}
      </p>
      <progress
        className="progress"
        value={raidProgress.heroic_bosses_killed}
        max={raidProgress.total_bosses}
      >
        {raidProgress.heroic_bosses_killed}/{raidProgress.total_bosses}
      </progress>
    </div>
  </div>
);

export default RaidProgressCard;
