import Loadable from 'react-loadable';
import Loading from '../containers/pages/Loading';

import type { Component } from 'react';

export const path = '/worlds/:worldId/games/:gameId';
export const Game: Class<Component<Object>> = Loadable({
    loader: () => import(/* webpackChunkName: 'game' */ '../containers/pages/Game'),
    loading: Loading,
    modules: ['game']
});
