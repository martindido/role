import Loadable from 'react-loadable';

import Loading from '../containers/pages/Loading';

export const path = '/worlds/:worldId';
export const World = Loadable({
    loader: () => import(/* webpackChunkName: 'world' */ '../containers/pages/World'),
    loading: Loading,
    modules: ['world']
});
