import React, { useState } from "react";
import classNames from "classnames";

import { RosterByRole } from "../types/blizzard";
import RosterCharacter from "./RosterCharacter";

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
          {activeTab === "tank" &&
            members.tank.map((member) => (
              <RosterCharacter character={member} key={member.id} />
            ))}
          {activeTab === "healer" &&
            members.healer.map((member) => (
              <RosterCharacter character={member} key={member.id} />
            ))}
          {activeTab === "damage" &&
            members.damage.map((member) => (
              <RosterCharacter character={member} key={member.id} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Roster;
