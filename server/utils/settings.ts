"use strict";

const getPluginStore = () => {
  return strapi.store({
    environment: "",
    type: "plugin",
    name: "instagram",
  });
};

export default {
  async getPluginSettings() {
    let value = await getPluginStore().get({ key: 'settings' });
    return value;
  },

  async setPluginSettings(value) {
    return await getPluginStore().set({ key: 'settings', value });
  },
};
