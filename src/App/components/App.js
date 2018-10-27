import React, { Component } from 'react';
import { isServer } from '../../store';
import Header from '../containers/Header';
import Routes from '../routes';

import type { Location } from 'react-router';
import type { EstablishCurrentUserAction } from "../types/Action";

type Props = {
    isAuthenticated: boolean,
    location: Location,
    establishCurrentUser: () => EstablishCurrentUserAction,
};

export default class App extends Component<Props> {
    componentWillMount() {
        if (!isServer) {
            this.props.establishCurrentUser();
        }
    }

    render() {
        return (
            <div id="app">
                {/*<Header*/}
                    {/*isAuthenticated={ this.props.isAuthenticated }*/}
                    {/*current={ this.props.location.pathname }*/}
                {/*/>*/}
                <div id="content">
                    <Routes />
                </div>
            </div>
        );
    }
}
