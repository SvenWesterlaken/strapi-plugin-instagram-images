"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    type: 'admin',
    routes: [
        {
            method: 'GET',
            path: '/settings',
            handler: 'config.getSettings',
            config: {
                policies: [],
            },
        },
        {
            method: 'POST',
            path: '/settings',
            handler: 'config.setSettings',
            config: {
                policies: [],
            },
        },
        {
            method: 'POST',
            path: '/getShortLivedToken',
            handler: 'token.getShortLivedToken',
            config: {
                policies: [],
            },
        },
        {
            method: 'POST',
            path: '/downloadImages',
            handler: 'instagramBasicApi.downloadImages',
            config: {
                policies: [],
            },
        },
    ],
};
