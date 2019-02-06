import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignUp from '../../components/auth/SignUp';
import { signUpSync } from '../../actions/sync';
import { setCurrentUnconfirmedUser } from '../../actions/auth';
import type { State } from '../../types/State';

const mapStateToProps = ({ auth }: State) => {
    return {
        currentUnconfirmedUser: auth.currentUnconfirmedUser
    };
};

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
