import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignUpConfirm from '../components/SignUpConfirm';
import {
    signUpConfirm,
    unsetCurrentUnconfirmedUser
} from '../actions/auth';

import type { State } from "../types/State";

const mapStateToProps = ({ auth }: State) => ({
    currentUnconfirmedUser: auth.currentUnconfirmedUser
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({
        signUpConfirm,
        unsetCurrentUnconfirmedUser
    }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpConfirm);
