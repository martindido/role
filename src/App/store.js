import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import reducers from './reducers';
import { epics } from './epics';

import type { Store } from './types/Store';

const epicMiddleware = createEpicMiddleware();
const enhancer = compose(
    applyMiddleware(epicMiddleware)
);

export default function configureStore() : Store {
    const store = createStore(
        reducers,
        enhancer
    );

    epicMiddleware.run(epics);
    return store;
};
