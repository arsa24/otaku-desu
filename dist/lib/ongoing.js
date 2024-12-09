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
exports.ongoing = void 0;
const fetch_1 = require("../utils/fetch");
const constant_1 = require("../utils/constant");
const downloadAll_1 = require("./downloadAll");
const ongoing = (resolution) => __awaiter(void 0, void 0, void 0, function* () {
    const $ = yield (0, fetch_1.fetch)(constant_1.URL);
    const elements = $("div.rapi div.venz ul").eq(0).children("li");
    const promises = elements.toArray().map((element, i) => __awaiter(void 0, void 0, void 0, function* () {
        const title = $(element).find("h2.jdlflm").text().trim();
        const day = $(element).find("div.epztipe").text().trim();
        const date = $(element).find("div.newnime").text().trim();
        const episode = $(element).find("div.epz").text().trim();
        const url = $(element).find("div.thumb").children("a").attr("href");
        const cover = $(element).find("div.thumbz").children("img").attr("src");
        let download = null;
        if (url) {
            download = yield (0, downloadAll_1.downloadAllEpisode)(url, resolution);
        }
        if (url && cover && episode) {
            return {
                number: i,
                title,
                day,
                date,
                episode,
                url,
                cover,
                download,
            };
        }
    }));
    let result = (yield Promise.all(promises)).filter(Boolean);
    return result;
});
exports.ongoing = ongoing;
