export type Key = { href: string };

export type Keyed = { key: Key };

export type CharacterWithSpec = {
  name: string;
  id: number;
  classId: number;
  specId: number;
  specName: string;
  specType: string;
};

export type RosterByRole = {
  tank: CharacterWithSpec[];
  healer: CharacterWithSpec[];
  damage: CharacterWithSpec[];
};
