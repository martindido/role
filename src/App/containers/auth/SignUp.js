import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignUp from '../../components/auth/SignUp';
import {
    signUp
} from '../../actions/auth';
import type { State } from "../../types/State";

const mapStateToProps = ({ auth }: State) => {
    return {
        currentUnconfirmedUser: auth.currentUnconfirmedUser
    };
};

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({
        signUp
    }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);
