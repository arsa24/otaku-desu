import { fetch } from "../utils/fetch";
import { URL } from "../utils/constant";
import { ongoingResult } from "../utils/types";

export const ongoing = async (): Promise<ongoingResult[]> => {
  const $ = await fetch(URL);
  const result: ongoingResult[] = [];
  $("div.rapi div.venz ul")
    .eq(0)
    .children("li")
    .each((i, e) => {
      const title = $(e).find("h2.jdlflm").text().trim();
      const day = $(e).find("div.epztipe").text().trim();
      const date = $(e).find("div.newnime").text().trim();
      const episode = $(e).find("div.epz").text().trim();
      const url = $(e).find("div.thumb").children("a").attr("href");
      const cover = $(e).find("div.thumbz").children("img").attr("src");
      if (url && cover && episode) {
        result.push({ number: i, title, day, date, episode, url, cover });
      }
    });
  return result;
};
