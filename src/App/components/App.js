import React, { Component } from 'react';
import { isServer } from '../../store';
import Routes from '../routes';

import '../styles/App.css';

import type { Location } from 'react-router-dom';
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
                <Routes />
            </div>
        );
    }
}
