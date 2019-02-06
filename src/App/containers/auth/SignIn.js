import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignIn from '../../components/auth/SignIn';
import { signInSync, authenticateSync } from '../../actions/sync';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: *) =>
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
