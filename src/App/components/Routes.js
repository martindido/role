import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import UnauthenticatedRoute from '../containers/routes/Unauthenticated';
import AuthenticatedRoute from '../containers/routes/Authenticated';
import DualRoute from '../containers/routes/Dual';
import AdminRoute from '../containers/routes/Admin';

import { Home, path as HomePath } from '../routes/Home';
import { About, path as AboutPath } from '../routes/About';
import { Worlds } from '../routes/Worlds';
import { World, path as WorldPath } from '../routes/World';
import { SignIn, path as SignInPath } from '../routes/auth/SignIn';
import { SignUp, path as SignUpPath } from '../routes/auth/SignUp';
import { SignUpConfirm, path as SignUpConfirmPath } from '../routes/auth/SignUpConfirm';
import { SignOut, path as SignOutPath } from '../routes/auth/SignOut';
import { Profile, path as ProfilePath } from '../routes/Profile';
import { AdminWorlds, path as AdminWorldsPath } from '../routes/admin/Worlds';
import NotFount from '../containers/pages/NotFound';

import type { Location } from 'react-router-dom';
import type { SetPreviousLocationAction } from '../types/Action';

export type Props = {
    location: Location,
    setPreviousLocation: Location => SetPreviousLocationAction
}

export default class Routes extends Component<Props> {
    componentDidUpdate(prevProps: Props) {
        if (this.props.location !== prevProps.location) {
            this.props.setPreviousLocation(prevProps.location);
        }
    }

    render() {
        return (
            <Switch>
                <DualRoute exact path={ HomePath } unauthenticatedComponent={ Home } authenticatedComponent={ Worlds } />
                <Route exact path={ AboutPath } component={ About } />
                <Route exact path={ ProfilePath } component={ Profile } />
                <AuthenticatedRoute exact path={ WorldPath } component={ World } />
                <AuthenticatedRoute exact path={ SignOutPath } component={ SignOut } />
                <AdminRoute exact path={ AdminWorldsPath } component={ AdminWorlds } />
                <UnauthenticatedRoute exact path={ SignInPath } component={ SignIn } />
                <UnauthenticatedRoute exact path={ SignUpPath } component={ SignUp } />
                <UnauthenticatedRoute exact path={ SignUpConfirmPath } component={ SignUpConfirm } />
                <Route component={ NotFount } />
            </Switch>
        );
    }
};
