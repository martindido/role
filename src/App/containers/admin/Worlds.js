import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Worlds from '../../components/admin/Worlds';
import { setLoading } from '../../actions/routing';
import { createWorld } from '../../actions/graphql';

import type { State } from '../../types/State';

const mapStateToProps = ({ routing, submit } : State) => ({
    isLoading: routing.isLoading,
    success: submit.success,
    errors: submit.errors
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({
        setLoading,
        createWorld
    }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Worlds);
