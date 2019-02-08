import Loadable from 'react-loadable';
import Loading from '../containers/pages/Loading';

import type { Component } from 'react';
import type { LoadingProps } from 'react-loadable';

export const path = '/worlds/:worldId';
export const World: Class<Component<LoadingProps>> = Loadable({
    loader: () => import(/* webpackChunkName: 'world' */ '../containers/pages/World'),
    loading: Loading,
    modules: ['world']
});
