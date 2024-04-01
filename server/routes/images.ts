export default {
  type: 'content-api',
  routes: [
    {
      method: 'GET',
      path: '/images',
      handler: 'instagramBasicApi.getImages',
      config: {
        auth: false
      }
    }
  ]
}
