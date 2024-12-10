import { URL } from "../utils/constant";
import { fetch } from "../utils/fetch";
import { resolution, searchResult } from "../utils/types";
import { downloadAllEpisode } from "./downloadAll";
import { infoAnime } from "./infoAnime";

export const search = async (
  search: string,
  resolution?: resolution
): Promise<searchResult[]> => {
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
      } as unknown as searchResult;
    }
    return undefined;
  });
  const result = (await Promise.all(promises)).filter(
    Boolean
  ) as searchResult[];
  return result;
};
