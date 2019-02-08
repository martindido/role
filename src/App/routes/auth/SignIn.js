import Loadable from 'react-loadable';
import Loading from '../../containers/pages/Loading';

import type { Component } from 'react';
import type { LoadingProps } from 'react-loadable';

export const path = '/sign-in';
export const SignIn: Class<Component<LoadingProps>> = Loadable({
    loader: () => import(/* webpackChunkName: "sign-in" */ '../../containers/auth/SignIn'),
    loading: Loading,
    modules: ['sign-in']
});
