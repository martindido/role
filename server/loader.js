import path from 'path';
import fs from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { Frontload, frontloadServerRender } from 'react-frontload';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import Loadable from 'react-loadable';

import createStore from '../src/store';
import App from '../src/app';
// $FlowFixMe
import manifest from '../build/asset-manifest.json';
import { setCurrentUser, logout } from '../src/App/actions/auth';
import { USER } from '../src/App/constants/cookies';

import type { $Request, $Response } from 'express';

export default (req: $Request, res: $Response) => {
    const injectHTML = (data, { html, title, meta, link, body, scripts, state }) => {
        data = data.replace('<html>', `<html ${html}>`);
        data = data.replace(/<title>.*?<\/title>/g, title);
        data = data.replace('</head>', `${meta}</head>`);
        data = data.replace('</head>', `${link}</head>`);
        data = data.replace(
            '<div id="root"></div>',
            `<div id="root">${body}</div><script>window.__PRELOADED_STATE__ = ${state}</script>`
        );
        data = data.replace('</body>', scripts.join('') + '</body>');
        return data;
    };

    fs.readFile(
        path.resolve(__dirname, '../build/index.html'),
        'utf8',
        (err, htmlData) => {
            if (err) {
                console.error('Read error', err);
                return res.status(404).end();
            }

            const { store } = createStore(req.url);

            if ('USER' in req.cookies) {
                store.dispatch(setCurrentUser(req.cookies[USER]));
            } else {
                store.dispatch(logout());
            }

            const context = {};
            const modules = [];
            const sheet = new ServerStyleSheet();

            frontloadServerRender(() =>
                renderToString(
                    <Loadable.Capture report={m => { modules.push(m) }}>
                        <Provider store={store}>
                            <StaticRouter location={ req.url } context={ context }>
                                <Frontload isServer={ true }>
                                    <StyleSheetManager sheet={sheet.instance}>
                                        <App />
                                    </StyleSheetManager>
                                </Frontload>
                            </StaticRouter>
                        </Provider>
                    </Loadable.Capture>
                )
            ).then(routeMarkup => {
                if (context.url) {
                    res.writeHead(302, {
                        Location: context.url
                    });
                    res.end();
                } else {
                    const extractAssets = (assets, chunks) =>
                        Object.keys(assets)
                        .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
                        .map(k => assets[k]);
                    const extraChunks = extractAssets(manifest, modules).map(
                        c => `<script type="text/javascript" src="/${c.replace(/^\//, '')}"></script>`
                    );
                    const helmet = Helmet.renderStatic();
                    const styleTags = sheet.getStyleTags();

                    res.send(injectHTML(htmlData, {
                        html: helmet.htmlAttributes.toString(),
                        title: helmet.title.toString(),
                        link: helmet.link.toString().concat(styleTags),
                        meta: helmet.meta.toString(),
                        body: routeMarkup,
                        scripts: extraChunks,
                        state: JSON.stringify(store.getState()).replace(/</g, '\\u003c')
                    }));
                }
            });
        }
    );
};
