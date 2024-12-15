import { URL } from "../utils/constant";
import { fetch } from "../utils/fetch";
import { Resolution, SearchResult } from "../utils/types";
import { downloadAllEpisode } from "./downloadAll";
import { infoAnime } from "./infoAnime";

export const search = async (
  search: string,
  resolution?: Resolution
): Promise<SearchResult[]> => {
  const $ = await fetch(URL, {
    params: {
      s: search,
      post_type: "anime",
    },
  });
  const elements = $('li[style="list-style:none;"]');
  const promises = elements.toArray().map(async (element, i) => {
    const urlAnime = $(element).find("h2 > a").attr("href");
    let info = null;
    let download = null;
    if (urlAnime) {
      info = await infoAnime(urlAnime);
      download = await downloadAllEpisode(urlAnime, resolution);
      return {
        number: i,
        ...info,
        download,
      } as unknown as SearchResult;
    }
    return undefined;
  });
  const result = (await Promise.all(promises)).filter(
    Boolean
  ) as SearchResult[];
  return result;
};
