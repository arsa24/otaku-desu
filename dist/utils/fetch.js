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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetch = void 0;
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = require("cheerio");
const fetch = (url, options) => __awaiter(void 0, void 0, void 0, function* () {
    let $;
    if (typeof url === "string") {
        const response = yield axios_1.default.get(url, options);
        $ = (0, cheerio_1.load)(yield response.data);
    }
    else if (typeof url === "function") {
        const link = yield url();
        const response = yield axios_1.default.get(link, options);
        $ = (0, cheerio_1.load)(yield response.data);
    }
    else {
        throw new Error("Invalid or missing URL parameter");
    }
    return $;
});
exports.fetch = fetch;
