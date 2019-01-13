import Loadable from 'react-loadable';
import Loading from '../../../containers/pages/Loading';

import type { Component } from 'react';

export const path = '/worlds/:worldId/admin';
export const AdminUpdateWorld: Class<Component<Object>> = Loadable({
    loader: () => import(/* webpackChunkName: "adminWorld" */ '../../../containers/admin/update/World'),
    loading: Loading,
    modules: ['AdminWorld']
});
