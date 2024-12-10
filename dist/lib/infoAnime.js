"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.infoAnime = void 0;
const fetch_1 = require("../utils/fetch");
const infoAnime = (url) => __awaiter(void 0, void 0, void 0, function* () {
    let $ = yield (0, fetch_1.fetch)(url);
    let sinopc = [];
    let result = {
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
    $("div.infozin div.infozingle p").each((i, e) => {
        const text = $(e).text().trim();
        const [category, value] = text.split(":").map((part) => part.trim());
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
        result.cover = cov;
    }
    result.synopsis = sinopc.join("\n");
    return result;
});
exports.infoAnime = infoAnime;
