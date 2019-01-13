import Loadable from 'react-loadable';
import Loading from '../../containers/pages/Loading';

import type { Component } from 'react';

export const path = '/sign-up-confirm';
export const SignUpConfirm: Class<Component<Object>> = Loadable({
    loader: () => import(/* webpackChunkName: "signUpConfirm" */ '../../containers/auth/SignUpConfirm'),
    loading: Loading,
    modules: ['signUpConfirm']
});
