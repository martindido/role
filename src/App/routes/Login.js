import Loadable from 'react-loadable';
import Loading from '../components/Loading';

export const path = '/login';
export const Login = Loadable({
    loader: () => import(/* webpackChunkName: "login" */ '../containers/Login'),
    loading: Loading,
    modules: ['login']
});
