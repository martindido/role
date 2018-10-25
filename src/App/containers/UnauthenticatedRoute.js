import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import UnauthenticatedRoute from '../components/UnauthenticatedRoute';

import type { State } from "../types/State";

const mapStateToProps = ({ auth: { isAuthenticated } }: State) => ({
    isAuthenticated
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({}, dispatch);

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(UnauthenticatedRoute)
);
