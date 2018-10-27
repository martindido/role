import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignIn from '../components/SignIn';
import {
    signIn
} from '../actions/auth';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({
        signIn
    }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn);
