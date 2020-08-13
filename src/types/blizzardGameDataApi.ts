import { Keyed } from "./blizzard";

export type CharacterSpecialization = Keyed & {
  name: string;
  id: number;
};

export type CharacterSpecializationIndexResponse = {
  _links: {
    [key: string]: {
      href: string;
    };
  };
  character_specializations: CharacterSpecialization[];
};

export type PlayableSpecializationResponse = {
  _links: {
    [key: string]: {
      href: string;
    };
  };
  id: number;
  playable_class: Keyed & {
    name: string;
    id: number;
  };
  name: string;
  role: {
    type: string;
    name: string;
  };
};
