import Loadable from 'react-loadable';
import Loading from '../../../containers/pages/Loading';

import type { Component } from 'react';

export const path = '/worlds/admin';
export const AdminCreateWorld: Class<Component<Object>> = Loadable({
    loader: () => import(/* webpackChunkName: "adminWorld" */ '../../../containers/admin/create/World'),
    loading: Loading,
    modules: ['AdminWorld']
});
