import React, { Component } from 'react';
import { isServer } from '../../store';
import Routes from '../containers/Routes';
import * as translations from '../translations';
import '../styles/App.css';

import type { Location } from 'react-router-dom';
import type { AuthenticateSyncActionCreator, GetCurrentLanguageSyncActionCreator } from '../types/ActionCreator';
import type { AuthenticateSync } from '../types/Sync';
import type { Initialize, SetActiveLanguage } from '../types/Locale';

type Props = {
    location: Location,
    authenticateSync: AuthenticateSyncActionCreator,
    getCurrentLanguageSync: GetCurrentLanguageSyncActionCreator,
    initialize: Initialize,
    setActiveLanguage: SetActiveLanguage
};

export default class App extends Component<Props> {
    constructor(props: Props) {
        super(props);
        this.props.initialize(translations);
    }

    componentWillMount() {
        if (!isServer) {
            this.authenticate()
                .then(() => this.getCurrentLanguage())
                .then(language => this.props.setActiveLanguage(language))
                .catch(error => {});
        }
    }

    authenticate = async (payload?: AuthenticateSync = {}) => {
        return await new Promise((resolve, reject) => {
            this.props.authenticateSync(payload, {
                onSuccess: resolve,
                onError: reject
            });
        });
    };

    getCurrentLanguage = async () => {
        return await new Promise((resolve, reject) => {
            this.props.getCurrentLanguageSync({
                onSuccess: resolve,
                onError: reject
            });
        });
    };

    render() {
        return (
            <div id='app'>
                <Routes />
            </div>
        );
    }
}
