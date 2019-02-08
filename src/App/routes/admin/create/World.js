import Loadable from 'react-loadable';
import Loading from '../../../containers/pages/Loading';

import type { Component } from 'react';
import type { LoadingProps } from 'react-loadable';

export const path = '/worlds/admin';
export const AdminCreateWorld: Class<Component<LoadingProps>> = Loadable({
    loader: () => import(/* webpackChunkName: "adminWorld" */ '../../../containers/admin/create/World'),
    loading: Loading,
    modules: ['AdminWorld']
});
