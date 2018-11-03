import Loadable from 'react-loadable';
import Loading from '../../components/Loading';

export const path = '/sign-out';
export const SignOut = Loadable({
    loader: () => import(/* webpackChunkName: "signOut" */ '../../containers/auth/SignOut'),
    loading: Loading,
    modules: ['signOut']
});
