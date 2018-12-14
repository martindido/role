import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import UnauthenticatedRoute from '../containers/routes/Unauthenticated';
import AuthenticatedRoute from '../containers/routes/Authenticated';
import DualRoute from '../containers/routes/Dual';
import AdminRoute from '../containers/routes/Admin';

import { Home, path as HomePath } from '../routes/Home';
import { Worlds } from '../routes/Worlds';
import { World, path as WorldPath } from '../routes/World';
import { Game, path as GamePath } from '../routes/Game';
import { SignIn, path as SignInPath } from '../routes/auth/SignIn';
import { SignUp, path as SignUpPath } from '../routes/auth/SignUp';
import { SignUpConfirm, path as SignUpConfirmPath } from '../routes/auth/SignUpConfirm';
import { SignOut, path as SignOutPath } from '../routes/auth/SignOut';
import { AdminCreateWorld, path as AdminCreateWorldPath } from '../routes/admin/create/World';
import { AdminUpdateWorld, path as AdminUpdateWorldPath } from '../routes/admin/update/World';
import { AdminCreateGame, path as AdminCreateGamePath } from '../routes/admin/create/Game';
import { AdminUpdateGame, path as AdminUpdateGamePath } from '../routes/admin/update/Game';
import NotFount from '../containers/pages/NotFound';

import type { Location } from 'react-router-dom';
import type { SetPreviousLocationActionCreator, SetNotFoundActionCreator } from '../types/ActionCreator';

export type Props = {
    location: Location,
    setNotFound: SetNotFoundActionCreator,
    setPreviousLocation: SetPreviousLocationActionCreator
}

export default class Routes extends Component<Props> {
    componentDidUpdate(prevProps: Props) {
        if (this.props.location !== prevProps.location) {
            this.props.setNotFound(false);
            this.props.setPreviousLocation(prevProps.location);
        }
    }

    render() {
        return (
            <Switch>
                <DualRoute exact path={ HomePath } unauthenticatedComponent={ Home } authenticatedComponent={ Worlds }/>
                <AdminRoute exact path={ AdminCreateWorldPath } component={ AdminCreateWorld }/>
                <AdminRoute exact path={ AdminUpdateWorldPath } component={ AdminUpdateWorld }/>
                <AdminRoute exact path={ AdminCreateGamePath } component={ AdminCreateGame }/>
                <AdminRoute exact path={ AdminUpdateGamePath } component={ AdminUpdateGame }/>
                <AuthenticatedRoute exact path={ GamePath } component={ Game }/>
                <AuthenticatedRoute exact path={ WorldPath } component={ World }/>
                <AuthenticatedRoute exact path={ SignOutPath } component={ SignOut }/>
                <UnauthenticatedRoute exact path={ SignInPath } component={ SignIn }/>
                <UnauthenticatedRoute exact path={ SignUpPath } component={ SignUp }/>
                <UnauthenticatedRoute exact path={ SignUpConfirmPath } component={ SignUpConfirm }/>
                <Route component={ NotFount }/>
            </Switch>
        );
    }
};
