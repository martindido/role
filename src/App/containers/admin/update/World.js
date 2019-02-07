import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { frontloadConnect } from 'react-frontload';
import { getTranslate } from 'react-localize-redux';
import { loadWorld } from '../../../actions/load';
import { updateWorldSync } from '../../../actions/sync';
import World from '../../../components/admin/update/World';

const mapStateToProps = ({ localize, routing, graphql }) => ({
    translate: getTranslate(localize),
    world: graphql.world,
    isNotFound: routing.isNotFound
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators(
        {
            loadWorld,
            updateWorldSync
        },
        dispatch
    );

const frontload = props => {
    const {
        computedMatch: {
            params: { worldId }
        }
    } = props;

    props.loadWorld(worldId);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    frontloadConnect(frontload, {
        onUpdate: false
    })(World)
);
