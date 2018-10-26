import Loadable from 'react-loadable';

export const path = '/logout';
export const Logout = Loadable({
    loader: () => import(/* webpackChunkName: "logout" */ '../containers/Logout'),
    loading: () => null,
    modules: ['logout']
});
