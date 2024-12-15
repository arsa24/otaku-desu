import {
    SearchResult,
    OngoingResult,
    DownloadEpsResult,
    InfoAnimeResult,
    DownloadAllResult,
    DownloadAllEpisodeResult,
    Resolution,
} from "./src/utils/types";

export declare function downloadAllEpisode(animeId: string): Promise<DownloadAllEpisodeResult>;
export declare function downloadBatch(animeId: string): Promise<DownloadAllResult | null>;
export declare function downloadEpisode(animeId: string, episode: number): Promise<DownloadEpsResult>;
export declare function ongoing(): Promise<OngoingResult[]>;
export declare function search(query: string): Promise<SearchResult[]>;
export declare function infoAnime(animeId: string): Promise<InfoAnimeResult>;

export {
    SearchResult,
    OngoingResult,
    DownloadEpsResult,
    InfoAnimeResult,
    DownloadAllResult,
    DownloadAllEpisodeResult,
    Resolution,
};
