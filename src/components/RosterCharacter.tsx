import React from "react";
import { CharacterWithSpec } from "../types/blizzard";

type RosterCharacter = {
  character: CharacterWithSpec;
};

const RosterCharacter: React.FC<RosterCharacter> = ({ character }) => (
  <div className="level roster-level" key={character.id}>
    <div className="level-left">
      <div className="level-item">
        <div>
          <p
            className={`subtitle wow-class-shadow wow-class-${character.classId}`}
            key={character.id}
          >
            {character.name}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default RosterCharacter;
