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
const downloadAllEpisode = (url, resolution) => __awaiter(void 0, void 0, void 0, function* () {
    const result = [];
    const $ = yield (0, fetch_1.fetch)(url);
    $();
    result.push({ resolution });
    return result;
});
exports.downloadAllEpisode = downloadAllEpisode;
