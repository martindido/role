import Loadable from 'react-loadable';
import Loading from '../components/Loading';

export const path = '/profile/:id';
export const Profile = Loadable({
    loader: () => import(/* webpackChunkName: "profile" */ '../containers/Profile'),
    loading: Loading,
    modules: ['profile']
});
