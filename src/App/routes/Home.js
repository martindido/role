import Loadable from 'react-loadable';
import Loading from '../containers/pages/Loading';

export const path = '/';
export const Home = Loadable({
    loader: () => import(/* webpackChunkName: "home" */ '../containers/pages/Home'),
    loading: Loading,
    modules: ['home']
});
