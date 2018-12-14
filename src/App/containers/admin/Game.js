import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { frontloadConnect } from 'react-frontload';
import { loadGame, loadWorld } from '../../actions/load';
import { createGameSubmit, updateGameSubmit } from '../../actions/submit';
import Game from '../../components/admin/Game';

const mapStateToProps = ({routing, graphql}) => ({
    world: graphql.world,
    game: graphql.game,
    isNotFound: routing.isNotFound
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({
        loadWorld,
        loadGame,
        createGameSubmit,
        updateGameSubmit
    }, dispatch);

const frontload = props => {
    const {game, world, computedMatch: {params: {gameId, worldId}}} = props;
    const gameLoaded = game && game.id === gameId;
    const worldLoaded = world && world.id === worldId;

    if (gameId && !gameLoaded) {
        props.loadGame(gameId);
    }
    else if (!worldLoaded) {
        props.loadWorld(worldId);
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    frontloadConnect(frontload, {
        onUpdate: false
    })(Game)
);
