import Loadable from 'react-loadable';
import Loading from '../../../containers/pages/Loading';

import type { Component } from 'react';

export const path = '/worlds/:worldId/games/admin';
export const AdminCreateGame: Class<Component<Object>> = Loadable({
    loader: () => import(/* webpackChunkName: "adminGame" */ '../../../containers/admin/create/Game'),
    loading: Loading,
    modules: ['AdminGame']
});
