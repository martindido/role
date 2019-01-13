import Loadable from 'react-loadable';
import Loading from '../../../containers/pages/Loading';

import type { Component } from 'react';

export const path = '/worlds/:worldId/games/:gameId/admin';
export const AdminUpdateGame: Class<Component<Object>> = Loadable({
    loader: () => import(/* webpackChunkName: "adminGame" */ '../../../containers/admin/update/Game'),
    loading: Loading,
    modules: ['AdminGame']
});
