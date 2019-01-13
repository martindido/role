import Loadable from 'react-loadable';
import Loading from '../containers/pages/Loading';

import type { Component } from 'react';

export const path = '/worlds';
export const Worlds: Class<Component<Object>> = Loadable({
    loader: () => import(/* webpackChunkName: "worlds" */ '../containers/pages/Worlds'),
    loading: Loading,
    modules: ['worlds']
});
