export interface searchResult {
  number: number;
  title: string;
  url: string;
  cover: string;
}

export interface ongoingResult {
  number: number;
  title: string;
  day: string;
  date: string;
  episode: string;
  url: string;
  cover: string;
}

export interface downloadEpsResult {
  title: string;
  resolution: resolution;
  download: Array<{
    provider: string;
    extension: "MKV" | "MP4";
    url: string;
  }>;
}

export interface downloadAllResult extends downloadEpsResult {
  title: string;
}

export type resolution = "360p" | "480p" | "720p";
