import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignIn from '../../components/auth/SignIn';
import { signInSubmit } from '../../actions/submit';
import { authenticate } from '../../actions/auth';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators(
        {
            signInSubmit,
            authenticate
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn);
