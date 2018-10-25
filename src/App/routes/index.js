import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, path as HomePath } from './Home';
import { Counter, path as CounterPath } from './Counter';
import NotFount from '../containers/NotFound';

export default () => (
    <Switch>
        <Route exact path={ HomePath } component={ Home } />
        <Route exact path={ CounterPath } component={ Counter } />
        <Route component={ NotFount } />
    </Switch>
);
