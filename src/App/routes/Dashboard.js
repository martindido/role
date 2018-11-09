import Loadable from 'react-loadable';
import Loading from '../containers/pages/Loading';

export const path = '/dashboard';
export const Dashboard = Loadable({
    loader: () => import(/* webpackChunkName: "dashboard" */ '../containers/Dashboard'),
    loading: Loading,
    modules: ['dashboard']
});
