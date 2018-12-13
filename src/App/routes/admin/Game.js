import Loadable from 'react-loadable';
import Loading from '../../containers/pages/Loading';

export const path = '/worlds/:worldId/games/:gameId/admin';
export const AdminGame = Loadable({
    loader: () => import(/* webpackChunkName: "adminGame" */ '../../containers/admin/Game'),
    loading: Loading,
    modules: ['AdminGame']
});
