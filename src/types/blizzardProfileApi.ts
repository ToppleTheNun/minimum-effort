import { Keyed } from "./blizzard";

export type Faction = {
  type: string;
  name: string;
};

export type Realm = Keyed & {
  name?: string;
  id: number;
  slug: string;
};

export type Guild = Keyed & {
  name: string;
  id: number;
  realm: Realm;
  faction: Faction;
};

export type PlayableClass = Keyed & {
  id: number;
};

export type PlayableRace = Keyed & {
  id: number;
};

export type GuildCharacter = Keyed & {
  name: string;
  id: number;
  realm: Realm;
  level: number;
  playable_class: PlayableClass;
  playable_race: PlayableRace;
};

export type GuildMember = {
  character: GuildCharacter;
  rank: number;
};

export type GuildResponse = {
  _links: {
    [key: string]: {
      href: string;
    };
  };
  guild: Guild;
  members: GuildMember[];
};

export type CharacterProfileResponse = {
  _links: {
    [key: string]: {
      href: string;
    };
  };
  id: number;
  name: string;
  active_spec: Keyed & {
    name: string;
    id: number;
  };
};
