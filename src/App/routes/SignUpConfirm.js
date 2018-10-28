import Loadable from 'react-loadable';
import Loading from '../components/Loading';

export const path = '/sign-up-confirm';
export const SignUpConfirm = Loadable({
    loader: () => import(/* webpackChunkName: "signUpConfirm" */ '../containers/SignUpConfirm'),
    loading: Loading,
    modules: ['signUpConfirm']
});
