import { frontloadConnect } from 'react-frontload';
import { withLocalize } from 'react-localize-redux';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { unsetWorld } from '../../../actions/graphql';
import { createWorldSync } from '../../../actions/sync';
import World from '../../../components/admin/create/World';
import { Action } from '../../../types/Action';
import { WorldCreateAdminProps } from '../../../types/Props/Admin/Create/World';
import { State } from '../../../types/State';

const mapStateToProps = ({ graphql }: State) => ({
    world: graphql.world
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) =>
    bindActionCreators(
        {
            unsetWorld,
            createWorldSync
        },
        dispatch
    );

const frontload = async (props: WorldCreateAdminProps) => {
    props.unsetWorld();
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
