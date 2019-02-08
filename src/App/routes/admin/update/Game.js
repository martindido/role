import Loadable from 'react-loadable';
import Loading from '../../../containers/pages/Loading';

import type { Component } from 'react';
import type { LoadingProps } from 'react-loadable';

export const path = '/worlds/:worldId/games/:gameId/admin';
export const AdminUpdateGame: Class<Component<LoadingProps>> = Loadable({
    loader: () => import(/* webpackChunkName: "adminGame" */ '../../../containers/admin/update/Game'),
    loading: Loading,
    modules: ['AdminGame']
});
