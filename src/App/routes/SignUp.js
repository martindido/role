import Loadable from 'react-loadable';
import Loading from '../components/Loading';

export const path = '/sign-up';
export const SignUp = Loadable({
    loader: () => import(/* webpackChunkName: "signUp" */ '../containers/SignUp'),
    loading: Loading,
    modules: ['signUp']
});
