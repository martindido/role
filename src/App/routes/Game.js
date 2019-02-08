import Loadable from 'react-loadable';
import Loading from '../containers/pages/Loading';

import type { Component } from 'react';
import type { LoadingProps } from 'react-loadable';

export const path = '/worlds/:worldId/games/:gameId';
export const Game: Class<Component<LoadingProps>> = Loadable({
    loader: () => import(/* webpackChunkName: 'game' */ '../containers/pages/Game'),
    loading: Loading,
    modules: ['game']
});
