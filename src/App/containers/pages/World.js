import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import World from '../../components/pages/World';

import type { State } from '../../types/State';

const mapStateToProps = ({ graphql }: State) => ({
    world: graphql.world
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(World);
