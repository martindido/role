import { Route, Switch } from 'react-router' // react-router v4
import { ConnectedRouter } from 'connected-react-router'
import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import Home from "./Home";
import Counter from "./Counter";
import { GlobalStyle } from '../styles';

import type { Store, History } from '../types/Store';

type Props = {
    store: Store,
    history: History,
};

export default class Root extends Component<Props> {
    render() {
        return (
            <Provider store={ this.props.store }>
                <ConnectedRouter history={ this.props.history }>
                    <Fragment>
                        <div className="main-container">
                            <Switch>
                                <Route exact path="/" component={ Home } />
                                <Route exact path="/counter" component={ Counter } />
                            </Switch>
                        </div>
                        <GlobalStyle/>
                    </Fragment>
                </ConnectedRouter>
            </Provider>
        );
    }
}
