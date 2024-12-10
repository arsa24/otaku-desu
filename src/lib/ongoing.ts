import { fetch } from "../utils/fetch";
import { URL } from "../utils/constant";
import { ongoingResult, resolution } from "../utils/types";
import { downloadAllEpisode } from "./downloadAll";

export const ongoing = async (
  resolution?: resolution
): Promise<ongoingResult[]> => {
  const $ = await fetch(URL);
  const elements = $("div.rapi div.venz ul").eq(0).children("li");
  const promises = elements.toArray().map(async (element, i) => {
    const title = $(element).find("h2.jdlflm").text().trim();
    const day = $(element).find("div.epztipe").text().trim();
    const date = $(element).find("div.newnime").text().trim();
    const episode = $(element).find("div.epz").text().trim();
    const url = $(element).find("div.thumb").children("a").attr("href");
    const cover = $(element).find("div.thumbz").children("img").attr("src");

    let download = null;
    if (url) {
      download = await downloadAllEpisode(url, resolution);
    }
    if (url && cover && episode) {
      return {
        number: i,
        title,
        day,
        date,
        episode,
        url,
        cover,
        download,
      };
    }
  });
  let result = (await Promise.all(promises)).filter(Boolean) as ongoingResult[];

  return result;
};
