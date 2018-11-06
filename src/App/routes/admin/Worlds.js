import Loadable from 'react-loadable';
import Loading from '../../containers/Loading';

export const path = '/admin/worlds';
export const AdminWorlds = Loadable({
    loader: () => import(/* webpackChunkName: "worlds" */ '../../containers/admin/Worlds'),
    loading: Loading,
    modules: ['AdminWorlds']
});
