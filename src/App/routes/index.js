import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UnauthenticatedRoute from '../containers/routes/Unauthenticated';
import AuthenticatedRoute from '../containers/routes/Authenticated';

import { Home, path as HomePath } from './Home';
import { About, path as AboutPath } from './About';
import { Counter, path as CounterPath } from './Counter';
import { Dashboard, path as DashboardPath } from './Dashboard';
import { Login, path as LoginPath } from './Login';
import { Logout, path as LogoutPath } from './Logout';
import NotFount from '../containers/NotFound';

export default () => (
    <Switch>
        <Route exact path={ HomePath } component={ Home } />
        <Route exact path={ AboutPath } component={ About } />
        <Route exact path={ CounterPath } component={ Counter } />
        <Route exact path={ DashboardPath } component={ Dashboard } />
        <UnauthenticatedRoute exact path={ LoginPath } component={ Login } />
        <AuthenticatedRoute exact path={ LogoutPath } component={ Logout } />
        <Route component={ NotFount } />
    </Switch>
);
