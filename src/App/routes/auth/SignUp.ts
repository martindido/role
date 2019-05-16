import Loadable from 'react-loadable';

import Loading from '../../containers/pages/Loading';

export const path = '/sign-up';
export const SignUp = Loadable({
    loader: () => import(/* webpackChunkName: "signUp" */ '../../containers/auth/SignUp'),
    loading: Loading,
    modules: ['signUp']
});
