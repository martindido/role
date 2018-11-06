import Loadable from 'react-loadable';
import Loading from '../containers/Loading';

export const path = '/worlds';
export const Worlds = Loadable({
    loader: () => import(/* webpackChunkName: "worlds" */ '../containers/Worlds'),
    loading: Loading,
    modules: ['worlds']
});
