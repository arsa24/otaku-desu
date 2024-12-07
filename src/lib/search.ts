import { URL } from "../utils/constant";
import { fetch } from "../utils/fetch";
import { searchResult } from "../utils/types";

export const search = async (search: string): Promise<searchResult[]> => {
  const result: searchResult[] = [];
  const $ = await fetch(URL, {
    params: {
      s: search,
      post_type: "anime",
    },
  });
  $('li[style="list-style:none;"]').each((i: number, e: any) => {
    const img = $(e).find("img").attr("src");
    const title = $(e).find("h2 > a").text().trim();
    const urlAnime = $(e).find("h2 > a").attr("href");
    if (title && urlAnime && img) {
      result.push({ number: i, title, url: urlAnime, cover: img });
    }
  });
  return result;
};
