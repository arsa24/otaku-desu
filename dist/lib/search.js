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
exports.search = void 0;
const constant_1 = require("../utils/constant");
const fetch_1 = require("../utils/fetch");
const downloadAll_1 = require("./downloadAll");
const infoAnime_1 = require("./infoAnime");
const search = (search, resolution) => __awaiter(void 0, void 0, void 0, function* () {
    const $ = yield (0, fetch_1.fetch)(constant_1.URL, {
        params: {
            s: search,
            post_type: "anime",
        },
    });
    const elements = $('li[style="list-style:none;"]');
    const promises = elements.toArray().map((element, i) => __awaiter(void 0, void 0, void 0, function* () {
        const urlAnime = $(element).find("h2 > a").attr("href");
        let info = null;
        let download = null;
        if (urlAnime) {
            info = yield (0, infoAnime_1.infoAnime)(urlAnime);
            download = yield (0, downloadAll_1.downloadAllEpisode)(urlAnime, resolution);
            return Object.assign(Object.assign({ number: i }, info), { download });
        }
        return undefined;
    }));
    const result = (yield Promise.all(promises)).filter(Boolean);
    return result;
});
exports.search = search;
