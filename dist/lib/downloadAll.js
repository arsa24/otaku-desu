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
exports.downloadAllEpisode = void 0;
const fetch_1 = require("../utils/fetch");
const downloadBatch_1 = require("./downloadBatch");
const downloadEps_1 = require("./downloadEps");
const downloadAllEpisode = (url_1, ...args_1) => __awaiter(void 0, [url_1, ...args_1], void 0, function* (url, resolution = "720p") {
    const $ = yield (0, fetch_1.fetch)(url);
    let episodeList = [];
    $("div.episodelist ul")
        .eq(1)
        .children("li")
        .each((i, e) => {
        const link = $(e).find("a").attr("href");
        if (link)
            episodeList.push(link);
    });
    const batchLink = $("div.episodelist ul").eq(0).find("a").attr("href");
    let dlBatch;
    if (batchLink) {
        dlBatch = yield (0, downloadBatch_1.downloadBatch)(batchLink, resolution);
    }
    const result = yield Promise.all(episodeList.map((link) => (0, downloadEps_1.downloadEpisode)(link, resolution)));
    return { series: result, batch: dlBatch };
});
exports.downloadAllEpisode = downloadAllEpisode;
