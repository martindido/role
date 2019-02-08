import Loadable from 'react-loadable';
import Loading from '../../../containers/pages/Loading';

import type { Component } from 'react';
import type { LoadingProps } from 'react-loadable';

export const path = '/worlds/:worldId/admin';
export const AdminUpdateWorld: Class<Component<LoadingProps>> = Loadable({
    loader: () => import(/* webpackChunkName: "adminWorld" */ '../../../containers/admin/update/World'),
    loading: Loading,
    modules: ['AdminWorld']
});
