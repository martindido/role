import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignUp from '../../components/auth/SignUp';
import { signUpSubmit } from '../../actions/submit';
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
            signUpSubmit,
            setCurrentUnconfirmedUser
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);
