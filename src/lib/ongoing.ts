import { fetch } from "../utils/fetch";
import { URL } from "../utils/constant";
import { Resolution, OngoingResult, DownloadAllResult, InfoAnimeResult, filterNonNull } from "../utils/types";
import { downloadAllEpisode } from "./downloadAll";
import { infoAnime } from "./infoAnime";

export const ongoing = async (
  resolution?: Resolution
): Promise<OngoingResult[]> => {
  const $ = await fetch(URL);
  const elements = $("div.rapi div.venz ul").eq(0).children("li");

  const promises = elements.toArray().map(async (element, i) => {
    const day = $(element).find("div.epztipe").text().trim();
    const date = $(element).find("div.newnime").text().trim();
    const episode = $(element).find("div.epz").text().trim();
    const url = $(element).find("div.thumb").children("a").attr("href");
    const cover = $(element).find("div.thumbz").children("img").attr("src");

    let download: DownloadAllResult[] | null = null;
    let info: InfoAnimeResult | null = null;

    if (url) {
      download = (await downloadAllEpisode(url, resolution)).series;
      info = await infoAnime(url);
    }

    if (url && cover && episode) {
      return {
        number: i,
        info,
        date,
        download,
        day,
        newEpisode: episode,
      };
    }

    return null;
  });

  const result = (await Promise.all(promises)).filter(filterNonNull);

  return result as OngoingResult[];
};
