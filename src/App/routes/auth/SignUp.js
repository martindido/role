import Loadable from 'react-loadable';
import Loading from '../../containers/pages/Loading';

import type { Component } from 'react';
import type { LoadingProps } from 'react-loadable';

export const path = '/sign-up';
export const SignUp: Class<Component<LoadingProps>> = Loadable({
    loader: () => import(/* webpackChunkName: "signUp" */ '../../containers/auth/SignUp'),
    loading: Loading,
    modules: ['signUp']
});
