import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';

type Props = {};

class App extends Component<Props> {
  render() {
    return (
        <Router
            basename={ '/' }
        >
            <Fragment>
                <div className="main-container">
                    <Route exact path="/" component={ Home } />
                </div>
            </Fragment>
        </Router>
    );
  }
}

export default App;
