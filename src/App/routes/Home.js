import Loadable from 'react-loadable';
import Loading from '../containers/pages/Loading';

import type { Component } from 'react';

export const path = '/';
export const Home: Class<Component<Object>> = Loadable({
    loader: () => import(/* webpackChunkName: "home" */ '../containers/pages/Home'),
    loading: Loading,
    modules: ['home']
});
