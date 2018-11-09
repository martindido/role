import Loadable from 'react-loadable';
import Loading from '../../containers/pages/Loading';

export const path = '/sign-up-confirm';
export const SignUpConfirm = Loadable({
    loader: () => import(/* webpackChunkName: "signUpConfirm" */ '../../containers/auth/SignUpConfirm'),
    loading: Loading,
    modules: ['signUpConfirm']
});
