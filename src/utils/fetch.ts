import axios, { AxiosRequestConfig } from "axios";
import { load } from "cheerio";

export const fetch = async (
  url?: string | (() => Promise<string>),
  options?: AxiosRequestConfig
): Promise<ReturnType<typeof load>> => {
  let $;
  if (typeof url === "string") {
    const response = await axios.get(url, options);
    $ = load(await response.data);
  } else if (typeof url === "function") {
    const link = await url();
    const response = await axios.get(link, options);
    $ = load(await response.data);
  } else {
    throw new Error("Invalid or missing URL parameter");
  }
  return $;
};
