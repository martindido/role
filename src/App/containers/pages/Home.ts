import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Home from '../../components/pages/Home';
import { Action } from '../../types/Action';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
