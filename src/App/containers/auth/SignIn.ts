import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { authenticateSync, signInSync } from '../../actions/sync';
import SignIn from '../../components/auth/SignIn';
import { Action } from '../../types/Action';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch<Action>) =>
    bindActionCreators(
        {
            signInSync,
            authenticateSync
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn);
