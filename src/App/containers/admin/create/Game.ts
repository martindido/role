import { frontloadConnect } from 'react-frontload';
import { withLocalize } from 'react-localize-redux';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { unsetGame } from '../../../actions/graphql';
import { loadWorld } from '../../../actions/load';
import { createGameSync } from '../../../actions/sync';
import Game from '../../../components/admin/create/Game';
import { Action } from '../../../types/Action';
import { GameCreateAdminProps } from '../../../types/Props/Admin/Create/Game';
import { State } from '../../../types/State';

const mapStateToProps = ({ graphql }: State) => ({
    game: graphql.game
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) =>
    bindActionCreators(
        {
            loadWorld,
            unsetGame,
            createGameSync
        },
        dispatch
    );

const frontload = async (props: GameCreateAdminProps) => {
    const {
        computedMatch: {
            params: { worldId }
        }
    } = props;

    props.unsetGame();
    props.loadWorld(worldId);
};

export default withLocalize(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(
        frontloadConnect(frontload, {
            onUpdate: false
        })(Game)
    )
);
