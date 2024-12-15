declare module "otaku-desu" {
    export interface SearchResult {
      number: number;
      title: string;
      titleJp: string;
      studio: string;
      producer: string;
      score: string;
      type: string;
      status: string;
      totalEpisode: string;
      release: string;
      duration: string;
      genre: string;
      synopsis: string;
      cover: string;
      download: DownloadAllResult[];
    }
  
    export interface OngoingResult {
      number: number;
      info: InfoAnimeResult | null;
      day: string;
      newEpisode: string;
      date: string;
      download: DownloadAllResult[] | null;
    }
  
    export interface DownloadEpsResult {
      title: string;
      resolution: Resolution;
      dl: Array<{
        provider: string;
        extension: "MKV" | "MP4";
        url: string;
      }>;
    }
  
    export interface InfoAnimeResult {
      title: string;
      titleJp: string;
      studio: string;
      producer: string;
      score: string;
      type: string;
      status: string;
      totalEpisode: string;
      release: string;
      duration: string;
      genre: string;
      synopsis: string;
      cover: string;
    }
  
    export interface DownloadAllResult {
      title: string;
      dl: DownloadEpsResult["dl"];
    }
  
    export type Resolution = "360p" | "480p" | "720p";
  
    export interface DownloadAllEpisodeResult {
      series: DownloadEpsResult[];
      batch: DownloadAllResult | null;
    }
  
    export function downloadAllEpisode(animeId: string): Promise<DownloadAllEpisodeResult>;
    export function downloadBatch(animeId: string): Promise<DownloadAllResult | null>;
    export function downloadEpisode(animeId: string, episode: number): Promise<DownloadEpsResult>;
    export function ongoing(): Promise<OngoingResult[]>;
    export function search(query: string): Promise<SearchResult[]>;
    export function infoAnime(animeId: string): Promise<InfoAnimeResult>;
  }
  