import Loadable from 'react-loadable';
import Loading from '../components/Loading';

export const path = '/logout';
export const Logout = Loadable({
    loader: () => import(/* webpackChunkName: "logout" */ '../containers/Logout'),
    loading: Loading,
    modules: ['logout']
});
