import Loadable from 'react-loadable';
import Loading from '../../containers/pages/Loading';

import type { Component } from 'react';

export const path = '/sign-up';
export const SignUp: Class<Component<Object>> = Loadable({
    loader: () => import(/* webpackChunkName: "signUp" */ '../../containers/auth/SignUp'),
    loading: Loading,
    modules: ['signUp']
});
