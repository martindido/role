import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignUpValidation from '../components/SignUpValidation';
import {
    signUpValidate,
    unsetCurrentUnconfirmedUser
} from '../actions/auth';

import type { State } from "../types/State";

const mapStateToProps = ({ auth }: State) => {
    return {
        currentUnconfirmedUser: auth.currentUnconfirmedUser
    };
};

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({
        signUpValidate,
        unsetCurrentUnconfirmedUser
    }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpValidation);
