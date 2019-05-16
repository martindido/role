import { frontloadConnect } from 'react-frontload';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { loadWorld } from '../../actions/load';
import World from '../../components/pages/World';
import { Action } from '../../types/Action';
import { WorldPageProps } from '../../types/Props/Pages/World';
import { State } from '../../types/State';

const mapStateToProps = ({ graphql }: State) => ({
    world: graphql.world
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) =>
    bindActionCreators(
        {
            loadWorld
        },
        dispatch
    );

const frontload = async (props: WorldPageProps) => {
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
