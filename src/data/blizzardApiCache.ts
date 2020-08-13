import Cache from "../services/cache";
import {
  CharacterSpecializationIndexResponse,
  PlayableSpecializationResponse,
} from "../types/blizzardGameDataApi";
import {
  getCharacterProfile,
  getCharacterSpecializationIndexResponse,
  getGuildRoster,
  getPlayableSpecializationResponse,
} from "./blizzardApi";
import { CharacterWithSpec, RosterByRole } from "../types/blizzard";

const secondsInMinute = 60;
const minutesInHour = 60;
const hoursToCache = 18;
const secondsToCache = secondsInMinute * minutesInHour * hoursToCache;

const playerSpecializationCache = new Cache(secondsToCache);

export const getCharacterSpecializationIndex = (): Promise<
  CharacterSpecializationIndexResponse
> => {
  return playerSpecializationCache.get<CharacterSpecializationIndexResponse>(
    "index",
    () => getCharacterSpecializationIndexResponse()
  );
};

export const getCharacterSpecialization = (
  id: number
): Promise<PlayableSpecializationResponse> => {
  return playerSpecializationCache.get(id, () =>
    getPlayableSpecializationResponse(id)
  );
};

export const getAllSpecs = async () => {
  const characterSpecializationIndex = await getCharacterSpecializationIndex();
  return Promise.all(
    characterSpecializationIndex.character_specializations.map(
      async (characterSpecialization) => {
        await getCharacterSpecialization(characterSpecialization.id);
      }
    )
  );
};

getAllSpecs().catch((reason) => {
  // eslint-disable-next-line no-console
  console.error(reason);
});

const getFilteredGuildMembers = async () => {
  const guildResponse = await getGuildRoster();
  return guildResponse.members.filter((member) =>
    [5, 4, 2, 0].includes(member.rank)
  );
};

const getCharacterAndSpec = async () => {
  const filteredGuildMembers = await getFilteredGuildMembers();
  return Promise.all(
    filteredGuildMembers.map(
      async (member): Promise<CharacterWithSpec> => {
        const characterResponse = await getCharacterProfile(member.character);
        const specResponse = await getCharacterSpecialization(
          characterResponse.active_spec.id
        );
        return {
          name: member.character.name,
          id: member.character.id,
          classId: member.character.playable_class.id,
          specId: specResponse.id,
          specName: specResponse.name,
          specType: specResponse.role.type,
        };
      }
    )
  );
};

const alphabeticalSort = (
  a: CharacterWithSpec,
  b: CharacterWithSpec
): number => {
  if (a.name > b.name) {
    return 1;
  }
  if (b.name > a.name) {
    return -1;
  }
  return 0;
};

export const getCharacterAndSpecGroupedBy = async (): Promise<RosterByRole> => {
  const charactersAndSpecs = await getCharacterAndSpec();
  const tanks = charactersAndSpecs
    .filter((charactersAndSpec) => charactersAndSpec.specType === "TANK")
    .sort(alphabeticalSort);
  const healers = charactersAndSpecs
    .filter((charactersAndSpec) => charactersAndSpec.specType === "HEALER")
    .sort(alphabeticalSort);
  const dps = charactersAndSpecs
    .filter((charactersAndSpec) => charactersAndSpec.specType === "DAMAGE")
    .sort(alphabeticalSort);
  return { tank: tanks, healer: healers, damage: dps };
};
