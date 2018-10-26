import Loadable from 'react-loadable';
import Loading from '../components/Loading';

export const path = '/';
export const Home = Loadable({
    loader: () => import(/* webpackChunkName: "home" */ '../containers/Home'),
    loading: Loading,
    modules: ['home']
});
