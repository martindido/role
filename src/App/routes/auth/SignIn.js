import Loadable from 'react-loadable';
import Loading from '../../containers/Loading';

export const path = '/sign-in';
export const SignIn = Loadable({
    loader: () => import(/* webpackChunkName: "sign-in" */ '../../containers/auth/SignIn'),
    loading: Loading,
    modules: ['sign-in']
});
