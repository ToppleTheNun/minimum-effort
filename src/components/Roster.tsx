import classNames from "classnames";
import React, { useState } from "react";

import { RosterByRole } from "../types/blizzard";
import RosterCharacter from "./RosterCharacter";
import RosterCharacters from "./RosterCharacters";

type RosterProps = {
  members: RosterByRole;
};

const Roster: React.FC<RosterProps> = ({ members }) => {
  const [activeTab, setActiveTab] = useState("tank");

  return (
    <section className="section">
      <div className="container">
        <h1 className="title text-white">Roster</h1>
        <div className="tabs is-large roster-tabs">
          <ul>
            <li className={classNames({ "is-active": activeTab === "tank" })}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/no-static-element-interactions */}
              <a
                onClick={() => setActiveTab("tank")}
                onKeyPress={() => setActiveTab("tank")}
              >
                Tanks
              </a>
            </li>
            <li className={classNames({ "is-active": activeTab === "healer" })}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/no-static-element-interactions */}
              <a
                onClick={() => setActiveTab("healer")}
                onKeyPress={() => setActiveTab("healer")}
              >
                Healers
              </a>
            </li>
            <li className={classNames({ "is-active": activeTab === "damage" })}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/no-static-element-interactions */}
              <a
                onClick={() => setActiveTab("damage")}
                onKeyPress={() => setActiveTab("damage")}
              >
                DPS
              </a>
            </li>
          </ul>
        </div>
        <div>
          {activeTab === "tank" && <RosterCharacters members={members.tank} />}
          {activeTab === "healer" && (
            <RosterCharacters members={members.healer} />
          )}
          {activeTab === "damage" && (
            <>
              <RosterCharacters members={members.damage} />
              <p className="roster-padding wow-class-3">
                * = not a guaranteed raid spot in Shadowlands
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Roster;
