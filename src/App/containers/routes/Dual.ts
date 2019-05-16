import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Dual from '../../components/routes/Dual';
import { Action } from '../../types/Action';
import { State } from '../../types/State';

const mapStateToProps = ({ auth: { isAuthenticated } }: State) => ({
    isAuthenticated
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dual);
