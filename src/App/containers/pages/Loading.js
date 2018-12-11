import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loading from '../../components/pages/Loading';

import type { State } from '../../types/State';

const mapStateToProps = ({auth}: State) => ({
    currentUser: auth.currentUser
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Loading);
