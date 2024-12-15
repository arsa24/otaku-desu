import { Resolution } from "../utils/types";
export declare const downloadAllEpisode: (url: string, resolution?: Resolution) => Promise<{
    series: import("../utils/types").DownloadEpsResult[];
    batch: any;
}>;
