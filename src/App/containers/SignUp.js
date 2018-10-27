import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignUp from '../components/SignUp';
import {
    signUp
} from '../actions/auth';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({
        signUp
    }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);
