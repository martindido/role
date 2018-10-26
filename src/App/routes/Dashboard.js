import Loadable from 'react-loadable';

export const path = '/dashboard';
export const Dashboard = Loadable({
    loader: () => import(/* webpackChunkName: "dashboard" */ '../containers/Dashboard'),
    loading: () => null,
    modules: ['dashboard']
});
