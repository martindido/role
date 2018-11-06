import Loadable from 'react-loadable';
import Loading from '../containers/Loading';

export const path = '/counter';
export const Counter = Loadable({
    loader: () => import(/* webpackChunkName: "counter" */ '../containers/Counter'),
    loading: Loading,
    modules: ['counter']
});
