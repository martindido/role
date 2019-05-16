import { withLocalize } from 'react-localize-redux';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { authenticateSync, getCurrentLanguageSync } from '../actions/sync';
import App from '../components/App';
import { Action } from '../types/Action';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch<Action>) =>
    bindActionCreators(
        {
            authenticateSync,
            getCurrentLanguageSync
        },
        dispatch
    );

export default withLocalize(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(App)
);
