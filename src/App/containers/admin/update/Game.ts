import { frontloadConnect } from 'react-frontload';
import { withLocalize } from 'react-localize-redux';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { loadGame } from '../../../actions/load';
import { updateGameSync } from '../../../actions/sync';
import Game from '../../../components/admin/update/Game';
import { Action } from '../../../types/Action';
import { GameUpdateAdminProps } from '../../../types/Props/Admin/Update/Game';
import { State } from '../../../types/State';

const mapStateToProps = ({ routing, graphql }: State) => ({
    game: graphql.game,
    isNotFound: routing.isNotFound
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) =>
    bindActionCreators(
        {
            loadGame,
            updateGameSync
        },
        dispatch
    );

const frontload = async (props: GameUpdateAdminProps) => {
    const {
        computedMatch: {
            params: { gameId }
        }
    } = props;

    props.loadGame(gameId);
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
