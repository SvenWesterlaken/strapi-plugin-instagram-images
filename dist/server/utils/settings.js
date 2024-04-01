"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getPluginStore = () => {
    return strapi.store({
        environment: "",
        type: "plugin",
        name: "instagram",
    });
};
exports.default = {
    async getPluginSettings() {
        let value = await getPluginStore().get({ key: 'settings' });
        return value;
    },
    async setPluginSettings(value) {
        return await getPluginStore().set({ key: 'settings', value });
    },
};
