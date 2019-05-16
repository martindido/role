import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';

import { setNotFound, setPreviousLocation } from '../actions/routing';
import Routes from '../components/Routes';
import { Action } from '../types/Action';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch<Action>) =>
    bindActionCreators(
        {
            setNotFound,
            setPreviousLocation
        },
        dispatch
    );

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Routes)
);
