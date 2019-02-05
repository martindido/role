import React, { Component } from 'react';
import { isServer } from '../../store';
import Routes from '../containers/Routes';

import '../styles/App.css';

import type { Location } from 'react-router-dom';
import type { AuthenticateActionCreator } from '../types/ActionCreator';

type Props = {
    location: Location,
    authenticate: AuthenticateActionCreator
};

export default class App extends Component<Props> {
    componentWillMount() {
        if (!isServer) {
            this.props.authenticate();
        }
    }

    render() {
        return (
            <div id='app'>
                <Routes />
            </div>
        );
    }
}
