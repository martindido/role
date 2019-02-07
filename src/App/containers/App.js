import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { withLocalize } from 'react-localize-redux';
import App from '../components/App';
import { authenticateSync, getCurrentLanguageSync } from '../actions/sync';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators(
        {
            authenticateSync,
            getCurrentLanguageSync
        },
        dispatch
    );

export default withLocalize(
    withRouter(
        connect(
            mapStateToProps,
            mapDispatchToProps
        )(App)
    )
);
