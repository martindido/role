import Loadable from 'react-loadable';
import Loading from '../../containers/pages/Loading';

import type { Component } from 'react';

export const path = '/sign-out';
export const SignOut: Class<Component<Object>> = Loadable({
    loader: () => import(/* webpackChunkName: "signOut" */ '../../containers/auth/SignOut'),
    loading: Loading,
    modules: ['signOut']
});
