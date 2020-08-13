import React, { useMemo } from "react";
import { CharacterWithSpec } from "../types/blizzard";
import RosterCharacter from "./RosterCharacter";
import chunkArray from "../utils/chunkArray";

type RosterCharactersProps = {
  members: CharacterWithSpec[];
};

const RosterCharacters: React.FC<RosterCharactersProps> = ({ members }) => {
  const chunkedMembers = useMemo(() => chunkArray(members, 4), [members]);
  return (
    <>
      {chunkedMembers.map((memberChunk) => (
        <div className="columns">
          {memberChunk.map((member) => (
            <div className="column">
              <RosterCharacter character={member} key={member.id} />
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default RosterCharacters;
