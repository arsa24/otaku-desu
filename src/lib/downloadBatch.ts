import { fetch } from "../utils/fetch";
import { resolution } from "../utils/types";

export const downloadBatch = async (
  url: string,
  resolution: resolution = "720p"
) => {
  let $ = await fetch(url);
  let result: any = [];
  $("div.batchlink ul li").each((i, e) => {
    const reso = $(e).children("strong").text().trim();
    if (reso.includes(resolution)) {
      $(e)
        .children("a")
        .each((j, element) => {
          const extension = reso.toLowerCase().includes("mkv") ? "MKV" : "MP4";
          const provider = $(element).text().trim();
          const link = $(element).attr("href");
          if (link) {
            result.push({ provider, extension, resolution, url: link });
          }
        });
    }
  });

  return result;
};
