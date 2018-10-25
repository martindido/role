import Loadable from 'react-loadable';

export const path = '/';
export const Home = Loadable({
    loader: () => import(/* webpackChunkName: "home" */ '../containers/Home'),
    loading: () => null,
    modules: ['home']
});
