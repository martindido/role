import Loadable from 'react-loadable';
import Loading from '../../../containers/pages/Loading';

export const path = '/worlds/:worldId/games/admin';
export const AdminCreateGame = Loadable({
    loader: () => import(/* webpackChunkName: "adminGame" */ '../../../containers/admin/create/Game'),
    loading: Loading,
    modules: ['AdminGame']
});
