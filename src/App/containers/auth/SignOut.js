import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignOut from '../../components/auth/SignOut';
import { signOut } from '../../actions/auth';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators(
        {
            signOut
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignOut);
