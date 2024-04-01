"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => ({
    async getSettings(ctx) {
        try {
            ctx.body = await strapi
                .plugin('instagram-images')
                .service('config')
                .getSettings();
        }
        catch (err) {
            ctx.throw(500, err);
        }
    },
    async setSettings(ctx) {
        const { body } = ctx.request;
        try {
            await strapi
                .plugin('instagram-images')
                .service('config')
                .setSettings(body);
            ctx.body = await strapi
                .plugin('instagram-images')
                .service('config')
                .getSettings();
        }
        catch (err) {
            ctx.throw(500, err);
        }
    },
});
