import { frontloadConnect } from 'react-frontload';
import { withLocalize } from 'react-localize-redux';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { loadWorld } from '../../../actions/load';
import { updateWorldSync } from '../../../actions/sync';
import World from '../../../components/admin/update/World';
import { Action } from '../../../types/Action';
import { WorldUpdateAdminProps } from '../../../types/Props/Admin/Update/World';
import { State } from '../../../types/State';

const mapStateToProps = ({ routing, graphql }: State) => ({
    world: graphql.world,
    isNotFound: routing.isNotFound
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) =>
    bindActionCreators(
        {
            loadWorld,
            updateWorldSync
        },
        dispatch
    );

const frontload = async (props: WorldUpdateAdminProps) => {
    const {
        computedMatch: {
            params: { worldId }
        }
    } = props;

    props.loadWorld(worldId);
};

export default withLocalize(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(
        frontloadConnect(frontload, {
            onUpdate: false
        })(World)
    )
);
