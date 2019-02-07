import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignUp from '../../components/auth/SignUp';
import { signUpSync } from '../../actions/sync';
import { setCurrentUnconfirmedUser } from '../../actions/auth';

const mapStateToProps = ({ auth }) => ({
    currentUnconfirmedUser: auth.currentUnconfirmedUser
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators(
        {
            signUpSync,
            setCurrentUnconfirmedUser
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);
