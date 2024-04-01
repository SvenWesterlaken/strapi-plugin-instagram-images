'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = __importDefault(require("../utils/settings"));
const { setPluginSettings, getPluginSettings } = settings_1.default;
exports.default = ({ strapi }) => ({
    async getSettings() {
        return getPluginSettings();
    },
    async setSettings(settings) {
        return setPluginSettings(settings);
    },
});
