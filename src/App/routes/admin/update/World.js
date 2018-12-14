import Loadable from 'react-loadable';
import Loading from '../../../containers/pages/Loading';

export const path = '/worlds/:worldId/admin';
export const AdminUpdateWorld = Loadable({
    loader: () => import(/* webpackChunkName: "adminWorld" */ '../../../containers/admin/update/World'),
    loading: Loading,
    modules: ['AdminWorld']
});
