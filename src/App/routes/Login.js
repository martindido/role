import Loadable from 'react-loadable';

export const path = '/login';
export const Login = Loadable({
    loader: () => import(/* webpackChunkName: "login" */ '../containers/Login'),
    loading: () => null,
    modules: ['login']
});
