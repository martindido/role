import React, { Component } from 'react';
import { isServer } from '../../store';
import Routes from '../containers/Routes';

import '../styles/App.css';

import type { Location } from 'react-router-dom';
import type { EstablishCurrentUserAction } from '../types/Action';

type Props = {
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
            <div id='app'>
                <Routes />
            </div>
        );
    }
}
