import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { unsetCurrentUnconfirmedUser } from '../../actions/auth';
import { signUpConfirmSync } from '../../actions/sync';
import SignUpConfirm from '../../components/auth/SignUpConfirm';
import { Action } from '../../types/Action';
import { State } from '../../types/State';

const mapStateToProps = ({ auth }: State) => ({
    currentUnconfirmedUser: auth.currentUnconfirmedUser
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) =>
    bindActionCreators(
        {
            signUpConfirmSync,
            unsetCurrentUnconfirmedUser
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpConfirm);
