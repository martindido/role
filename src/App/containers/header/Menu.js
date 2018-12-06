import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Menu from '../../components/header/Menu';

import type { State } from '../../types/State';

const mapStateToProps = ({ auth, routing }: State) => ({
    currentUser: auth.currentUser,
    previousLocation: routing.previousLocation
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({}, dispatch);

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Menu)
);
