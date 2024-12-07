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
const ongoing = () => __awaiter(void 0, void 0, void 0, function* () {
    const $ = yield (0, fetch_1.fetch)(constant_1.URL);
    const result = [];
    $("div.rapi div.venz ul")
        .eq(0)
        .children("li")
        .each((i, e) => {
        const title = $(e).find("h2.jdlflm").text().trim();
        const day = $(e).find("div.epztipe").text().trim();
        const date = $(e).find("div.newnime").text().trim();
        const episode = $(e).find("div.epz").text().trim();
        const url = $(e).find("div.thumb").children("a").attr("href");
        const cover = $(e).find("div.thumbz").children("img").attr("src");
        if (url && cover && episode) {
            result.push({ number: i, title, day, date, episode, url, cover });
        }
    });
    return result;
});
exports.ongoing = ongoing;
