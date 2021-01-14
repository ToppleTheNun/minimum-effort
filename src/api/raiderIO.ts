import {
  RaiderIoGuildProfileResponse,
  RaiderIoRaidProgression,
} from "../types/raiderIO";

export const fetchGuildProfileResponse = async (): Promise<RaiderIoGuildProfileResponse> => {
  const res = await fetch(
    "https://raider.io/api/v1/guilds/profile?region=us&realm=Thrall&name=Minimum%20Effort&fields=raid_progression"
  );
  return await res.json();
};

export const fetchGuildProgression = async (): Promise<RaiderIoRaidProgression> => {
  const {
    raid_progression: raidProgression,
  } = await fetchGuildProfileResponse();
  return raidProgression;
};
