import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UnauthenticatedRoute from '../containers/routes/Unauthenticated';
import AuthenticatedRoute from '../containers/routes/Authenticated';
import AdminRoute from '../containers/routes/Admin';

import { Home, path as HomePath } from './Home';
import { About, path as AboutPath } from './About';
import { Worlds, path as WorldsPath } from './Worlds';
import { World, path as WorldPath } from './World';
import { SignIn, path as SignInPath } from './auth/SignIn';
import { SignUp, path as SignUpPath } from './auth/SignUp';
import { SignUpConfirm, path as SignUpConfirmPath } from './auth/SignUpConfirm';
import { SignOut, path as SignOutPath } from './auth/SignOut';
import { Profile, path as ProfilePath } from './Profile';
import { AdminWorlds, path as AdminWorldsPath } from './admin/Worlds';
import NotFount from '../containers/pages/NotFound';

export default () => (
    <Switch>
        <Route exact path={ HomePath } component={ Home } />
        <Route exact path={ AboutPath } component={ About } />
        <Route exact path={ ProfilePath } component={ Profile } />
        <AuthenticatedRoute exact path={ WorldsPath } component={ Worlds } />
        <AuthenticatedRoute exact path={ WorldPath } component={ World } />
        <AuthenticatedRoute exact path={ SignOutPath } component={ SignOut } />
        <AdminRoute exact path={ AdminWorldsPath } component={ AdminWorlds } />
        <UnauthenticatedRoute exact path={ SignInPath } component={ SignIn } />
        <UnauthenticatedRoute exact path={ SignUpPath } component={ SignUp } />
        <UnauthenticatedRoute exact path={ SignUpConfirmPath } component={ SignUpConfirm } />
        <Route component={ NotFount } />
    </Switch>
);
