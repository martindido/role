import Loadable from 'react-loadable';
import Loading from '../../containers/pages/Loading';

export const path = '/worlds/:worldId/games/admin';
export const AdminGames = Loadable({
    loader: () => import(/* webpackChunkName: "adminWorld" */ '../../containers/admin/Game'),
    loading: Loading,
    modules: ['AdminGame']
});
