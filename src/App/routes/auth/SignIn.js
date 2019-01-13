import Loadable from 'react-loadable';
import Loading from '../../containers/pages/Loading';

import type { Component } from 'react';

export const path = '/sign-in';
export const SignIn: Class<Component<Object>> = Loadable({
    loader: () => import(/* webpackChunkName: "sign-in" */ '../../containers/auth/SignIn'),
    loading: Loading,
    modules: ['sign-in']
});
