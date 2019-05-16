import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Header from '../../components/header/Header';
import { Action } from '../../types/Action';
import { State } from '../../types/State';

const mapStateToProps = ({ auth }: State) => ({
    currentUser: auth.currentUser
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
