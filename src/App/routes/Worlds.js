import Loadable from 'react-loadable';
import Loading from '../components/Loading';

export const path = '/worlds';
export const Worlds = Loadable({
    loader: () => import(/* webpackChunkName: "worlds" */ '../containers/Worlds'),
    loading: Loading,
    modules: ['worlds']
});
