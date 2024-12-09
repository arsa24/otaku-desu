import { fetch } from "../utils/fetch";
import { infoAnimeResult } from "../utils/types";

export const infoAnime = async (url: string): Promise<infoAnimeResult> => {
  let $ = await fetch(url);
  let sinopc: string[] = [];
  let result: infoAnimeResult = {
    title: "",
    titleJp: "",
    studio: "",
    producer: "",
    score: "",
    type: "",
    status: "",
    totalEpisode: "",
    release: "",
    duration: "",
    genre: "",
    synopsis: "",
    cover: "",
  };
  $("div.infozin div.infozingle p").each((i: number, e: any) => {
    const text = $(e).text().trim();
    const [category, value]: any = text
      .split(":")
      .map((part: any) => part.trim());
    if (category && value) {
      switch (category) {
        case "Judul":
          result.title = value;
          break;
        case "Japanese":
          result.titleJp = value;
          break;
        case "Studio":
          result.studio = value;
          break;
        case "Produser":
          result.producer = value;
          break;
        case "Skor":
          result.score = value;
          break;
        case "Tipe":
          result.type = value;
          break;
        case "Status":
          result.status = value;
          break;
        case "Total Episode":
          result.totalEpisode = value;
          break;
        case "Tanggal Rilis":
          result.release = value;
          break;
        case "Durasi":
          result.duration = value;
          break;
        case "Genre":
          result.genre = value;
          break;
        default:
          break;
      }
    }
  });

  $("div.sinopc p").each((i, e) => {
    let synopsis = $(e).text().trim();
    sinopc.push(synopsis);
  });
  const cov = $("div.fotoanime img").attr("src");
  if (cov) {
    result.cover;
  }
  result.synopsis = sinopc.join("\n");
  return result;
};
