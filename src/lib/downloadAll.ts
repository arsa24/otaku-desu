import { fetch } from "../utils/fetch";
import { resolution } from "../utils/types";
import { downloadEpisode } from "./downloadEps";

export const downloadAllEpisode = async (
  url: string,
  resolution: resolution = "720p"
) => {
  const $ = await fetch(url);
  let episodeList: string[] = [];
  $("div.episodelist ul")
    .eq(1)
    .children("li")
    .each((i: number, e: any) => {
      const link = $(e).find("a").attr("href");
      if (link) episodeList.push(link);
    });

  const result = await Promise.all(
    episodeList.map((link) => downloadEpisode(link, resolution))
  );
  return result;
};
