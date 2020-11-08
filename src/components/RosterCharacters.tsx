import React, { useMemo } from "react";

import { CharacterWithSpec } from "../types/blizzard";
import chunkArray from "../utils/chunkArray";
import RosterCharacter from "./RosterCharacter";

type RosterCharactersProps = {
  members: CharacterWithSpec[];
};

const RosterCharacters: React.FC<RosterCharactersProps> = ({ members }) => {
  const chunkedMembers = useMemo(() => chunkArray(members, 4), [members]);
  return (
    <>
      {chunkedMembers.map((memberChunk) => (
        <div className="columns" key={memberChunk.map((it) => it.id).join()}>
          {memberChunk.map((member) => (
            <div className="column" key={member.id}>
              <RosterCharacter character={member} />
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default RosterCharacters;
