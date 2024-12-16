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

export interface NewBatchAnimeResult {
  number: number
  title: string
  url: string
  totalEpisode: string
  score: string
  cover: string
  download: DownloadAllResult;
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

export const filterNonNull = <T>(value: T | null | undefined): value is T => value != null;