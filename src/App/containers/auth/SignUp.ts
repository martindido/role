import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { setCurrentUnconfirmedUser } from '../../actions/auth';
import { signUpSync } from '../../actions/sync';
import SignUp from '../../components/auth/SignUp';
import { Action } from '../../types/Action';
import { State } from '../../types/State';

const mapStateToProps = ({ auth }: State) => ({
    currentUnconfirmedUser: auth.currentUnconfirmedUser
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) =>
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
