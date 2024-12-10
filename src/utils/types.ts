export interface searchResult {
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
  download: downloadAllResult[];
}

export interface ongoingResult {
  number: number;
  title: string;
  day: string;
  date: string;
  episode: string;
  url: string;
  cover: string;
  download: any;
}

export interface downloadEpsResult {
  title: string;
  resolution: resolution;
  dl: Array<{
    provider: string;
    extension: "MKV" | "MP4";
    url: string;
  }>;
}

export interface infoAnimeResult {
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

export interface downloadAllResult extends downloadEpsResult {
  title: string;
}

export type resolution = "360p" | "480p" | "720p";
