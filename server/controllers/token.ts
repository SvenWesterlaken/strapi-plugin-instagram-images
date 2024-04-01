export default ({ strapi }) => ({
  async getShortLivedToken(ctx) {
    const { body } = ctx.request;
    try {
      ctx.body = await strapi
        .plugin('instagram-images')
        .service('token')
        .getShortLivedToken(body.redirect_uri, body.code, body.state);
    } catch (err) {
      ctx.throw(500, err);
    }
  }
});
