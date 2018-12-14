import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { frontloadConnect } from 'react-frontload';
import { loadWorld } from '../../actions/load';
import { createWorldSubmit, updateWorldSubmit } from '../../actions/submit';
import World from '../../components/admin/World';

const mapStateToProps = ({routing, graphql}) => ({
    world: graphql.world,
    isNotFound: routing.isNotFound
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({
        loadWorld,
        createWorldSubmit,
        updateWorldSubmit
    }, dispatch);

const frontload = props => {
    const {world, computedMatch: {params: {worldId}}} = props;
    const worldLoaded = world && world.id === worldId;

    if (worldId && !worldLoaded) {
        props.loadWorld(worldId);
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    frontloadConnect(frontload, {
        onUpdate: false
    })(World)
);
