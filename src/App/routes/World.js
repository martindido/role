import Loadable from 'react-loadable';
import Loading from '../containers/pages/Loading';

import type { Component } from 'react';

export const path = '/worlds/:worldId';
export const World: Class<Component<Object>> = Loadable({
    loader: () => import(/* webpackChunkName: 'world' */ '../containers/pages/World'),
    loading: Loading,
    modules: ['world']
});
