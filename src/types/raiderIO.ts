export type RaiderIoRaidProgress = {
  summary: string;
  total_bosses: number;
  normal_bosses_killed: number;
  heroic_bosses_killed: number;
  mythic_bosses_killed: number;
};
export type RaiderIoRaidProgression = {
  [key: string]: RaiderIoRaidProgress;
};
export type RaiderIoGuildProfileResponse = {
  name: string;
  faction: string;
  region: string;
  realm: string;
  profile_url: string;
  raid_progression?: RaiderIoRaidProgression;
};
