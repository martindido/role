import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import NotFound from '../../components/pages/NotFound';
import { Action } from '../../types/Action';
import { State } from '../../types/State';

const mapStateToProps = ({ auth: { isAuthenticated } }: State) => ({
    isAuthenticated
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotFound);
