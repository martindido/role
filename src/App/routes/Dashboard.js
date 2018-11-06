import Loadable from 'react-loadable';
import Loading from '../containers/Loading';

export const path = '/dashboard';
export const Dashboard = Loadable({
    loader: () => import(/* webpackChunkName: "dashboard" */ '../containers/Dashboard'),
    loading: Loading,
    modules: ['dashboard']
});
