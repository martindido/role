import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { frontloadConnect } from 'react-frontload';
import { setLoading, setNotFound } from '../../actions/routing';
import { getWorld } from '../../actions/graphql';
import { createWorldSubmit, updateWorldSubmit } from '../../actions/submit';
import World from '../../components/admin/World';

const mapStateToProps = ({routing, graphql}) => ({
    world: graphql.world,
    isLoading: routing.isLoading,
    isNotFound: routing.isNotFound
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({
        setLoading,
        setNotFound,
        getWorld,
        createWorldSubmit,
        updateWorldSubmit
    }, dispatch);

const frontload = props => {
    if (props.computedMatch.params.worldId) {
        props.setLoading(true);
        props.getWorld(props.computedMatch.params.worldId);
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
