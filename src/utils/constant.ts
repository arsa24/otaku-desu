import { fetch } from "./fetch";

export const BASE_URL = "https://otakudesu.io/";

export const URL = async (): Promise<string> => {
  const $ = await fetch(BASE_URL);
  const link = $("a#skip").attr("href");
  if (!link) throw new Error("Link not found");
  return link;
};
