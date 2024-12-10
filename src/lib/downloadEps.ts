import { fetch } from "../utils/fetch";
import { downloadEpsResult, resolution } from "../utils/types";

export const downloadEpisode = async (
  url: string,
  resolution: resolution = "720p"
): Promise<downloadEpsResult> => {
  const $ = await fetch(url);
  const title = $("h1.posttl").text();

  let result: downloadEpsResult = {
    title,
    resolution,
    dl: [],
  };
  $("div.download ul li").each((i, e) => {
    const reso = $(e).children("strong").text().trim();
    if (reso.includes(resolution)) {
      $(e)
        .children("a")
        .each((j, element) => {
          const extension = reso.toLowerCase().includes("mkv") ? "MKV" : "MP4";
          const provider = $(element).text().trim();
          const link = $(element).attr("href");
          if (link) {
            result.dl.push({ provider, extension, url: link });
          }
        });
    }
  });
  return result;
};
