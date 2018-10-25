import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import App from '../components/App';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({}, dispatch);

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(App)
);
