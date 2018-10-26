import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Logout from '../components/Logout';
import {
    logout
} from '../actions/auth';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({
        logout
    }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Logout);
