import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { frontloadConnect } from 'react-frontload';
import { loadWorld } from '../../../actions/load';
import { updateWorldSubmit } from '../../../actions/submit';
import World from '../../../components/admin/update/World';

const mapStateToProps = ({routing, graphql}) => ({
    world: graphql.world,
    isNotFound: routing.isNotFound
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({
        loadWorld,
        updateWorldSubmit
    }, dispatch);

const frontload = props => {
    const {computedMatch: {params: {worldId}}} = props;

    props.loadWorld(worldId);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    frontloadConnect(frontload, {
        onUpdate: false
    })(World)
);
