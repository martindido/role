import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Loading from '../../components/pages/Loading';
import { Action } from '../../types/Action';
import { State } from '../../types/State';

const mapStateToProps = ({ auth }: State) => ({
    currentUser: auth.currentUser
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Loading);
