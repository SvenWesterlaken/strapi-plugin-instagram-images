"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const images_1 = __importDefault(require("./images"));
const config_1 = __importDefault(require("./config"));
const token_1 = __importDefault(require("./token"));
const instagramBasicApi_1 = __importDefault(require("./instagramBasicApi"));
exports.default = {
    images: images_1.default,
    config: config_1.default,
    token: token_1.default,
    instagramBasicApi: instagramBasicApi_1.default
};
