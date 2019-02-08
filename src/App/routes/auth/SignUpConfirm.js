import Loadable from 'react-loadable';
import Loading from '../../containers/pages/Loading';

import type { Component } from 'react';
import type { LoadingProps } from 'react-loadable';

export const path = '/sign-up-confirm';
export const SignUpConfirm: Class<Component<LoadingProps>> = Loadable({
    loader: () => import(/* webpackChunkName: "signUpConfirm" */ '../../containers/auth/SignUpConfirm'),
    loading: Loading,
    modules: ['signUpConfirm']
});
