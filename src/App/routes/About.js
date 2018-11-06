import Loadable from 'react-loadable';
import Loading from '../containers/Loading';

export const path = '/about';
export const About = Loadable({
    loader: () => import(/* webpackChunkName: "about" */ '../containers/About'),
    loading: Loading,
    modules: ['about']
});
