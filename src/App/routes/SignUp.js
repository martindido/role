import Loadable from 'react-loadable';
import Loading from '../components/Loading';

export const path = '/sign-up';
export const SignUp = Loadable({
    loader: () => import(/* webpackChunkName: "sign-up" */ '../containers/SignUp'),
    loading: Loading,
    modules: ['sign-up']
});
