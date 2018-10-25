import Loadable from 'react-loadable';

export const path = '/counter';
export const Counter = Loadable({
    loader: () => import(/* webpackChunkName: "counter" */ '../containers/Counter'),
    loading: () => null,
    modules: ['counter']
});
