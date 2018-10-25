import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import App from '../components/App';
import {
    establishCurrentUser
} from '../actions/auth';

import type { State } from '../types/State';

const mapStateToProps = ({ auth: { isAuthenticated } }: State) => ({
    isAuthenticated
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({
        establishCurrentUser
    }, dispatch);

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(App)
);
