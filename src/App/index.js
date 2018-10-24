import React, { Component } from 'react';

import configureStore  from './store';
import Root from './containers/Root';

type Props = {};

const store = configureStore();

class App extends Component<Props> {
  render() {
    return (
        <Root key="root" store={store} />
    );
  }
}

export default App;
