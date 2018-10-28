import Loadable from 'react-loadable';
import Loading from '../components/Loading';

export const path = '/companies';
export const Companies = Loadable({
    loader: () => import(/* webpackChunkName: "companies" */ '../containers/Companies'),
    loading: Loading,
    modules: ['companies']
});
