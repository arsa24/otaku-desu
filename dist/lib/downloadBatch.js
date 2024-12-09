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
exports.downloadBatch = void 0;
const fetch_1 = require("../utils/fetch");
const downloadBatch = (url_1, ...args_1) => __awaiter(void 0, [url_1, ...args_1], void 0, function* (url, resolution = "720p") {
    let $ = yield (0, fetch_1.fetch)(url);
    let result = [];
    $("div.batchlink ul li").each((i, e) => {
        const reso = $(e).children("strong").text().trim();
        if (reso.includes(resolution)) {
            $(e)
                .children("a")
                .each((j, element) => {
                const extension = reso.toLowerCase().includes("mkv") ? "MKV" : "MP4";
                const provider = $(element).text().trim();
                const link = $(element).attr("href");
                if (link) {
                    result.push({ provider, extension, resolution, url: link });
                }
            });
        }
    });
    return result;
});
exports.downloadBatch = downloadBatch;
