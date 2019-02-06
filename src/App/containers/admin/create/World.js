import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { frontloadConnect } from 'react-frontload';
import { unsetWorld } from '../../../actions/graphql';
import { createWorldSync } from '../../../actions/sync';
import World from '../../../components/admin/create/World';

const mapStateToProps = ({ routing, graphql }) => ({
    world: graphql.world
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators(
        {
            unsetWorld,
            createWorldSync
        },
        dispatch
    );

const frontload = props => {
    props.unsetWorld();
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    frontloadConnect(frontload, {
        onUpdate: false
    })(World)
);
