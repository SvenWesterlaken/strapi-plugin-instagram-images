'use strict';

import settings from '../utils/settings';
const {setPluginSettings, getPluginSettings } = settings;

export default ({ strapi }) => ({
  async getSettings() {
    return getPluginSettings();
  },

  async setSettings(settings) {
    return setPluginSettings(settings);
  },
});
