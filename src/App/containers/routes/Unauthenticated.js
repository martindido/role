import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import Unauthenticated from '../../components/routes/Unauthenticated';

import type { State } from "../../types/State";

const mapStateToProps = ({ auth: { isAuthenticated } }: State) => ({
    isAuthenticated
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({}, dispatch);

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Unauthenticated)
);
