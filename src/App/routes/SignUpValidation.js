import Loadable from 'react-loadable';
import Loading from '../components/Loading';

export const path = '/sign-up-validation';
export const SignUpValidation = Loadable({
    loader: () => import(/* webpackChunkName: "signUpValidation" */ '../containers/SignUpValidation'),
    loading: Loading,
    modules: ['signUpValidation']
});
