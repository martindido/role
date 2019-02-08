import Loadable from 'react-loadable';
import Loading from '../containers/pages/Loading';

import type { Component } from 'react';
import type { LoadingProps } from 'react-loadable';

export const path = '/';
export const Home: Class<Component<LoadingProps>> = Loadable({
    loader: () => import(/* webpackChunkName: "home" */ '../containers/pages/Home'),
    loading: Loading,
    modules: ['home']
});
