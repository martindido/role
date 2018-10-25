import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, path as HomePath } from './Home';
import { About, path as AboutPath } from './About';
import { Counter, path as CounterPath } from './Counter';
import NotFount from '../containers/NotFound';

export default () => (
    <Switch>
        <Route exact path={ HomePath } component={ Home } />
        <Route exact path={ AboutPath } component={ About } />
        <Route exact path={ CounterPath } component={ Counter } />
        <Route component={ NotFount } />
    </Switch>
);
