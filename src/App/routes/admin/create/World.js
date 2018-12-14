import Loadable from 'react-loadable';
import Loading from '../../../containers/pages/Loading';

export const path = '/worlds/admin';
export const AdminCreateWorld = Loadable({
    loader: () => import(/* webpackChunkName: "adminWorld" */ '../../../containers/admin/create/World'),
    loading: Loading,
    modules: ['AdminWorld']
});
