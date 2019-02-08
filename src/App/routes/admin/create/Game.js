import Loadable from 'react-loadable';
import Loading from '../../../containers/pages/Loading';

import type { Component } from 'react';
import type { LoadingProps } from 'react-loadable';

export const path = '/worlds/:worldId/games/admin';
export const AdminCreateGame: Class<Component<LoadingProps>> = Loadable({
    loader: () => import(/* webpackChunkName: "adminGame" */ '../../../containers/admin/create/Game'),
    loading: Loading,
    modules: ['AdminGame']
});
