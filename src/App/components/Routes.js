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
import { AdminWorlds, path as AdminWorldsPath } from '../routes/admin/Worlds';
import { AdminWorld, path as AdminWorldPath } from '../routes/admin/World';
import { AdminGames, path as AdminGamesPath } from '../routes/admin/Games';
import { AdminGame, path as AdminGamePath } from '../routes/admin/Game';
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
                <AdminRoute exact path={ AdminWorldsPath } component={ AdminWorlds }/>
                <AdminRoute exact path={ AdminWorldPath } component={ AdminWorld }/>
                <AdminRoute exact path={ AdminGamesPath } component={ AdminGames }/>
                <AdminRoute exact path={ AdminGamePath } component={ AdminGame }/>
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
