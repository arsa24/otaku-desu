import { AxiosRequestConfig } from "axios";
import { load } from "cheerio";
export declare const fetch: (url?: string | (() => Promise<string>), options?: AxiosRequestConfig) => Promise<ReturnType<typeof load>>;
