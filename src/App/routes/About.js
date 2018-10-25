import Loadable from 'react-loadable';

export const path = '/about';
export const About = Loadable({
    loader: () => import(/* webpackChunkName: "about" */ '../containers/About'),
    loading: () => null,
    modules: ['about']
});
