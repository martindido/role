import Loadable from 'react-loadable';
import Loading from '../../containers/pages/Loading';

import type { Component } from 'react';
import type { LoadingProps } from 'react-loadable';

export const path = '/sign-out';
export const SignOut: Class<Component<LoadingProps>> = Loadable({
    loader: () => import(/* webpackChunkName: "signOut" */ '../../containers/auth/SignOut'),
    loading: Loading,
    modules: ['signOut']
});
