import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { frontloadConnect } from 'react-frontload';
import World from '../../components/pages/World';
import { loadWorld } from '../../actions/load';

import type { State } from '../../types/State';

const mapStateToProps = ({graphql}: State) => ({
    world: graphql.world
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({
        loadWorld
    }, dispatch);

const frontload = async props => {
    const {world, computedMatch: {params: {worldId}}} = props;
    const worldLoaded = world && world.id === worldId;
    
    if (!worldLoaded) {
        props.loadWorld(worldId);
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    frontloadConnect(frontload, {
        onUpdate: false
    })(World)
);
