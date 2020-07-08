import axios from "axios";
import { GatsbyNode } from "gatsby";
import { resolve } from "path";

import { RaiderIoGuildProfileResponse } from "../types";

// eslint-disable-next-line import/prefer-default-export
export const createPages: GatsbyNode["createPages"] = async ({
  actions: { createPage },
}) => {
  const { data: guildProfile } = await axios.get<RaiderIoGuildProfileResponse>(
    "https://raider.io/api/v1/guilds/profile?region=us&realm=Thrall&name=Minimum%20Effort&fields=raid_progression"
  );

  createPage({
    path: "/",
    component: resolve(__dirname, "..", "src", "templates", "home.tsx"),
    context: { guildProfileResponse: guildProfile },
  });
};
