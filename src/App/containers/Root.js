import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import Home from "./Home";
import Counter from "./Counter";

import type { Store } from '../types/Store';

type Props = {
    store: Store,
};

export default class Root extends Component<Props> {
    render() {
        return (
            <Provider store={ this.props.store }>
                <Router basename={ '/' }>
                    <Fragment>
                        <div className="main-container">
                            <Route exact path="/" component={ Home } />
                            <Route exact path="/counter" component={ Counter } />
                        </div>
                    </Fragment>
                </Router>
            </Provider>
        );
    }
}
