import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  async downloadImages(ctx) {
    const { body } = ctx.request;

    try {
      ctx.body = await strapi
        .plugin('instagram-images')
        .service('instagramBasicApi')
        .downloadImages(body.force);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
  async getImages(ctx) {
    const { body, query, method } = ctx.request;

    // Get params from query (if GET) or body (otherwise)
    const params = method === 'GET' ? query : body;

    try {
      // TODO: check if reassigned ctx.body is necessary
      // Token refresh if necessary
      ctx.body = await strapi
        .plugin('instagram-images')
        .service('token')
        .checkTokenExpiration();

      // Download new images if necessary
      ctx.body = await strapi
        .plugin('instagram-images')
        .service('instagramBasicApi')
        .downloadImages(false);

      // Return images from database
      ctx.body = await strapi
        .plugin('instagram-images')
        .service('images')
        .find(params);
    } catch (err) {
      ctx.throw(500, err);
    }
  }
});
