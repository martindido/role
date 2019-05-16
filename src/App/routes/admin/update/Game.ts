import Loadable from 'react-loadable';

import Loading from '../../../containers/pages/Loading';

export const path = '/worlds/:worldId/games/:gameId/admin';
export const AdminUpdateGame = Loadable({
    loader: () => import(/* webpackChunkName: "adminGame" */ '../../../containers/admin/update/Game'),
    loading: Loading,
    modules: ['AdminGame']
});
