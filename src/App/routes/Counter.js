import Loadable from 'react-loadable';
import Loading from '../components/Loading';

export const path = '/counter';
export const Counter = Loadable({
    loader: () => import(/* webpackChunkName: "counter" */ '../containers/Counter'),
    loading: Loading,
    modules: ['counter']
});
