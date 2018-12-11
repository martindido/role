import React, { Component } from 'react';
import { isServer } from '../../store';
import Routes from '../containers/Routes';

import '../styles/App.css';

import type { Location } from 'react-router-dom';
import type { EstablishCurrentUserActionCreator } from '../types/ActionCreator';

type Props = {
    location: Location,
    establishCurrentUser: EstablishCurrentUserActionCreator,
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
                <Routes/>
            </div>
        );
    }
}
