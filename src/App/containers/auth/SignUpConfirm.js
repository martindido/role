import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignUpConfirm from '../../components/auth/SignUpConfirm';
import { unsetCurrentUnconfirmedUser } from '../../actions/auth';
import { signUpConfirmSync } from '../../actions/sync';

import type { State } from '../../types/State';

const mapStateToProps = ({ auth }: State) => ({
    currentUnconfirmedUser: auth.currentUnconfirmedUser
});

const mapDispatchToProps = (dispatch: *) =>
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
