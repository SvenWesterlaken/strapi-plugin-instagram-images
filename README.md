<p align="center">
    <img src="./.github/images/logo.png" width="250" height="250"/>
</p>

<h1 align="center">Strapi Instagram Images Plugin</h1>

<p align="center">
    <a href="https://github.com/SvenWesterlaken/strapi-plugin-instagram-images/actions/workflows/release.yml">
        <img alt="release" src="https://github.com/SvenWesterlaken/strapi-plugin-instagram-images/actions/workflows/release.yml/badge.svg?branch=main">
    </a>
    <a href="https://www.npmjs.com/package/@sven902/strapi-plugin-instagram-images">
        <img alt="NPM Version" src="https://img.shields.io/npm/v/@sven902/strapi-plugin-instagram-images">
    </a>
</p>

<p align="center">Allows you to download images from Instagram and display them on your website powered by a <a href="https://strapi.io/">Strapi</a> backend.</p>

<blockquote align="center">If you were using the original <a href="https://github.com/webvibe-io/strapi-plugin-instagram">strapi-plugin-instagram by Kepes</a>, follow the <a href="#migration">migration guide</a> to migrate to this plugin.</blockquote>

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
    - [Local developement](#local-developement)
    - [How to setup Instagram Basic Display API to download images](#how-to-setup-instagram-basic-display-api-to-download-images)
- [API](#api)
- [Troubleshooting](#troubleshooting)
    - [Most common errors](#most-common-errors)
    - [Emojis in content causing errors](#emojis-in-content-causing-errors)
    - [Issues](#issues)
- [Migration](#migration)
- [Credits](#credits)

## Features
- Download last 20 images from Instagram whenever the API endpoint is called with a 10 minute interval
- Can download images from albums/carousels. (Will be saved as separate images with same `mediaId`)
- Uses Instagram Basic Display API
- Uses Strapi draft and publish system to provide a way to temporarily hide images (published by default)
- Due to refetching images it prevents the image url's from becoming invalid
- Save permalinks to posts in the database
- Allows videos to be downloaded as well in order to obtain a thumbnail

## Installation

The plugin can be installed through npm:
  
```bash
npm install -S @sven902/strapi-plugin-instagram-images
```

Secondly don't forget to enable the plugin in your Strapi project (`config/plugins.ts`):

```ts
'instagram-images': {
    enabled: true
}
```

## Configuration

### Local developement
**Important:**  The redirect URL's that are used in the Instagram connection don't accept localhost nor http URLs. Therefore, you need to have a domain and a SSL certificate to use this plugin. A way to use and test this plugin locally is to use a service like [ngrok](https://ngrok.com/) with the following command: `ngrok http 1337`. Make sure that you connect to the Strapi CMS through the ngrok URL as the Instagram redirect URLs generated by the plugin will be based on the URL you are using (`window.location`).

### How to setup Instagram Basic Display API to download images

1. Go to the [Facebook for Developers](https://developers.facebook.com/) website and create a new app.
2. Go to the app dashboard and add the Instagram Basic API.
3. Add a new test user in the Instagram Test Users tab. See [Meta developer docs](https://developers.facebook.com/docs/instagram-basic-display-api/overview#instagram-testers) for more information.
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
- Double check if your callback url is correct in the Instagram app settings. It should be the same as the one in the Strapi settings.
- Make sure you have added a test user in the Instagram Test Users tab and accepted the request in the Instagram permissions page on the account. If not, you will get an error message like `Invalid OAuth access token` or a general `Permission Error`.
- Save button might be stuck if nothing is changed on the settings page. Simply edit some parameters in order to save the settings.
- Make sure you have the right permissions to call the API endpoint. You can check this in the roles & permissions section in the Strapi admin panel.

### Emojis in content causing errors
In order for the database to save emoji's properly you should make sure the encoding of both the table & connection is set to utf8mb4. For the connection this can be done by adding the following line to your database configuration (in `/config/database.js`) in the connection configuration:

```ts
charset: env('DATABASE_CHARSET', 'utf8mb4'),
```

### Issues
If you think you found a problem or bug feel free to [open an Issue at Github](https://github.com/SvenWesterlaken/strapi-plugin-instagram-images/issues).

## Migration
If you are using the original plugin and want to migrate to this plugin you can follow these steps:

1. Note that the data is saved separately in the database as this is a 'different' plugin. Therefore, you need to redo [the steps in the configuration section](#how-to-setup-instagram-basic-display-api-to-download-images) in order to download the images again.
2. Change your API url's for fetching (or any other action) from `/api/instagram/images` to `/api/instagram-images/images`.
3. You can delete the old plugin from your project by running `npm uninstall strapi-plugin-instagram`.
4. You can also remove the old images as you will probably have a duplicate of collection entities for the images.

## Credits

The original plugin was created by [Kepes](https://github.com/kepes). After finding some critical bugs I proposed a PR to fix them. Unfortunately, The PR has yet to be merged and the plugin hasn't had an update for almost a year by now. Therefore, I decided to copy my fork with the fixes, adjusted it for typescript and publish it as a new package in order to provide further maintenance and maybe the addition of new features. The original plugin can be found [here](https://github.com/webvibe-io/strapi-plugin-instagram).
