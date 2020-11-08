import ClientOAuth2 from "client-oauth2";

import {
  CharacterSpecializationIndexResponse,
  PlayableSpecializationResponse,
} from "../types/blizzardGameDataApi";
import {
  CharacterProfileResponse,
  GuildCharacter,
  GuildResponse,
} from "../types/blizzardProfileApi";

const blizzardAuth = new ClientOAuth2({
  clientId: process.env.BLIZZARD_OAUTH_CLIENT_ID,
  clientSecret: process.env.BLIZZARD_OAUTH_CLIENT_SECRET,
  accessTokenUri: "https://us.battle.net/oauth/token",
});

let blizzardOAuthToken: ClientOAuth2.Token | null = null;

const getBlizzardOAuthToken = async (): Promise<ClientOAuth2.Token> => {
  if (blizzardOAuthToken === null || blizzardOAuthToken.expired()) {
    const accessToken = await blizzardAuth.credentials.getToken();
    blizzardOAuthToken = accessToken;
    return accessToken;
  }
  return blizzardOAuthToken;
};

const joinToQueryString = (queryParams: { [key: string]: string }) =>
  Object.keys(queryParams)
    .map(
      (k) => `${encodeURIComponent(k)}=${encodeURIComponent(queryParams[k])}`
    )
    .join("&");

export const getGuildRoster = async (): Promise<GuildResponse> => {
  const queryParams = joinToQueryString({
    namespace: "profile-us",
    locale: "en_US",
  });
  const token = await getBlizzardOAuthToken();
  const res = await fetch(
    `https://us.api.blizzard.com/data/wow/guild/thrall/minimum-effort/roster?${queryParams}`,
    { headers: { Authorization: `Bearer ${token.accessToken}` } }
  );
  return (await res.json()) as GuildResponse;
};

export const getCharacterSpecializationIndexResponse = async (): Promise<
  CharacterSpecializationIndexResponse
> => {
  const queryParams = joinToQueryString({
    namespace: "static-us",
    locale: "en_US",
  });
  const token = await getBlizzardOAuthToken();
  const res = await fetch(
    `https://us.api.blizzard.com/data/wow/playable-specialization/index?${queryParams}`,
    { headers: { Authorization: `Bearer ${token.accessToken}` } }
  );
  return (await res.json()) as CharacterSpecializationIndexResponse;
};

export const getPlayableSpecializationResponse = async (
  id: number
): Promise<PlayableSpecializationResponse> => {
  const queryParams = joinToQueryString({
    namespace: "static-us",
    locale: "en_US",
  });
  const token = await getBlizzardOAuthToken();
  const res = await fetch(
    `https://us.api.blizzard.com/data/wow/playable-specialization/${id}?${queryParams}`,
    { headers: { Authorization: `Bearer ${token.accessToken}` } }
  );
  return (await res.json()) as PlayableSpecializationResponse;
};

export const getCharacterProfile = async (
  guildCharacter: GuildCharacter
): Promise<CharacterProfileResponse> => {
  const queryParams = joinToQueryString({
    locale: "en_US",
  });
  const token = await getBlizzardOAuthToken();
  const url = `${guildCharacter.key.href}&${queryParams}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token.accessToken}` },
  });
  return (await res.json()) as CharacterProfileResponse;
};
