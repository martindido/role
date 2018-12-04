import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header';

import type { State } from "../types/State";

const mapStateToProps = ({ auth }: State) => ({
    currentUser: auth.currentUser
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({}, dispatch);

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Header)
);
