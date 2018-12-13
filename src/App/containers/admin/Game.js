import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { frontloadConnect } from 'react-frontload';
import { setLoading, setNotFound } from '../../actions/routing';
import { getGame, getWorld } from '../../actions/graphql';
import { createGameSubmit, updateGameSubmit } from '../../actions/submit';
import Game from '../../components/admin/Game';

const mapStateToProps = ({routing, graphql}) => ({
    world: graphql.world,
    game: graphql.game,
    isLoading: routing.isLoading,
    isNotFound: routing.isNotFound
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({
        setLoading,
        setNotFound,
        getWorld,
        getGame,
        createGameSubmit,
        updateGameSubmit
    }, dispatch);

const frontload = props => {
    if (props.computedMatch.params.gameId) {
        props.setLoading(true);
        props.getGame(props.computedMatch.params.gameId);
    }
    else if (props.computedMatch.params.worldId) {
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
    })(Game)
);
