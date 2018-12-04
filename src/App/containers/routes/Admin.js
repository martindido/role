import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Admin from '../../components/routes/Admin';

import type { State } from '../../types/State';

const mapStateToProps = ({ auth }: State) => ({
    isAdmin: !!auth.currentUser && auth.currentUser.isAdmin
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Admin);
