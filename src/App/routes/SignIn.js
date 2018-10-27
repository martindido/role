import Loadable from 'react-loadable';
import Loading from '../components/Loading';

export const path = '/sign-in';
export const SignIn = Loadable({
    loader: () => import(/* webpackChunkName: "sign-in" */ '../containers/SignIn'),
    loading: Loading,
    modules: ['sign-in']
});
