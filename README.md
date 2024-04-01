[![release](https://github.com/SvenWesterlaken/strapi-plugin-instagram-images/actions/workflows/release.yml/badge.svg?branch=main)](https://github.com/SvenWesterlaken/strapi-plugin-instagram-images/actions/workflows/release.yml)


# Strapi Instagram Images Plugin
Allows you to download images from Instagram and display them on your website powered by a [Strapi](https://strapi.io/) backend.

## Features
- Download last 20 images from Instagram whenever the API endpoint is called with a 10 minute interval
- Can download images from albums (carousels)
- Uses Instagram Basic Display API
- Uses Strapi draft and publish system to provide a way to temporarily hide images
- Refetches images when the URL expires
- Save permalinks to posts in the database
- Allows videos to be downloaded as well in order to obtain a thumbnail

## Installation

The plugin can be installed through npm:
  
```bash
npm install @sven902/strapi-plugin-instagram-images
```

Secondly don't forget to enable the plugin in your Strapi project (`config/plugins.ts`):

```ts
'instagram-images': {
    enabled: true
}
```

## Configuration
**Important:** note that the redirect URL's that are used in the Instagram connection don't accept localhost nor http URLs. Therefore, you need to have a domain and a SSL certificate to use this plugin. A way to use and test this plugin locally is to use a service like [ngrok](https://ngrok.com/) with the following command: `ngrok http 1337`. Make sure that you connect to the Strapi CMS through the ngrok URL as the Instagram redirect URLs generated by the plugin will be based on the URL you are using.

### How to setup Instagram Basic Display API to download images

1. Go to the [Facebook for Developers](https://developers.facebook.com/) website and create a new app.
2. Go to the app dashboard and add the Instagram Basic API.
3. Add a new test user in the Instagram Test Users tab.
4. Go to https://www.instagram.com/accounts/manage_access/ in order to accept the permissions for the app as a test user.
5. Open up the settings tab in the Strapi admin panel and fill in the Instagram app ID & Secret.
6. If correctly setup you should be able to click on the authenticate button and login with the Instagram account that you have added as a test user.
7. After logging in you should be redirected back to the Strapi admin panel and see a success message.
8. You should be able to use the 'Download images' button to download the last 20 images from the Instagram account that you have added as a test user.
9. The images should now be available in the Instagram images collection type.
10. Extra: make sure you enabled the right permissions in order to call the API endpoint to fetch the images.

## API

After setup you can call the following API endpoint to fetch the images:

```
/api/instagram-images/images
```

This should work as a normal Strapi content type endpoint.

## Troubleshooting
If you have any error in the authentication process or the plugin don't have short or long lived token you should check Last Instagram Api response and developer tool's console for error messages.

### Most common errors
- With wrong callback URLs Instagram can't forward the token to Strapi. Please check the URLs and check that your public domain is working properly!
- If you don't change enything on the configuration screen you can't push Save button. Please cahange App Id or Secret to save changes!
- You can't download images when there is no token. Please check your tokens on the configuration screen!

### Emojis in content causing errors
In order for the database to save emoji's properly you should make sure the encoding of both the table & connection is set to utf8mb4. For the connection this can be done by adding the following line to your database configuration (in /config/database.js) in the connection configuration:

```ts
charset: env('DATABASE_CHARSET', 'utf8mb4'),
```

### Issues
If you think you found a problem or bug feel free to [open an Issue at Github](https://github.com/SvenWesterlaken/strapi-plugin-instagram-images/issues).

## Credits

The original plugin was created by [Kepes](https://github.com/kepes). After finding some critical bugs I proposed a PR to fix them. Unfortunately, The PR has yet to be merged and the plugin hasn't had an updated for almost a year by now. Therefore, I decided to copy my fork with the fixes and publish it as a new package in order to provide further maintenance and maybe the addition of new features. The original plugin can be found [here](https://github.com/webvibe-io/strapi-plugin-instagram).