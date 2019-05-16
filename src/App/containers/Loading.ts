import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Loading from '../components/Loading';
import { Action } from '../types/Action';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Loading);
