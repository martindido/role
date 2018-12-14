import Loadable from 'react-loadable';
import Loading from '../containers/pages/Loading';

export const path = '/worlds/:worldId/games/:gameId';
export const Game = Loadable({
    loader: () => import(/* webpackChunkName: 'game' */ '../containers/pages/Game'),
    loading: Loading,
    modules: ['game']
});
