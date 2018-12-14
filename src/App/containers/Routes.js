import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Routes from '../components/Routes';
import { setNotFound, setPreviousLocation } from '../actions/routing';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({
        setNotFound,
        setPreviousLocation
    }, dispatch);

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Routes)
);
