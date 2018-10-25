import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import { Provider } from 'react-redux';
import { Frontload } from 'react-frontload';
import { ConnectedRouter } from 'connected-react-router';
import createStore from "../store";

const { store, history } = createStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={ store }>
      <ConnectedRouter history={ history }>
          <Frontload noServerRender={ true }>
              <App />
          </Frontload>
      </ConnectedRouter>
  </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
