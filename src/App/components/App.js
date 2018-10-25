import React, { Component } from 'react';
import { isServer } from '../../store';
import Header from '../containers/Header';
import Routes from '../routes';

import type { Location } from 'react-router';

type Props = {
    location: Location
};

export default class App extends Component<Props> {
    componentWillMount() {
        if (!isServer) {
            // this.props.establishCurrentUser();
        }
    }

    render() {
        return (
            <div id="app">
                <Header
                    isAuthenticated={ false }
                    current={ this.props.location.pathname }
                />
                <div id="content">
                    <Routes />
                </div>
            </div>
        );
    }
}
