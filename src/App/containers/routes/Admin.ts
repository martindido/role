import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Admin from '../../components/routes/Admin';
import { Action } from '../../types/Action';
import { State } from '../../types/State';

const mapStateToProps = ({ auth }: State) => ({
    isAdmin: !!auth.currentUser && !!auth.currentUser.isAdmin
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Admin);
