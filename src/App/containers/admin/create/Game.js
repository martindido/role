import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { frontloadConnect } from 'react-frontload';
import { loadWorld } from '../../../actions/load';
import { unsetGame } from '../../../actions/graphql';
import { createGameSubmit } from '../../../actions/submit';
import Game from '../../../components/admin/create/Game';

const mapStateToProps = ({graphql}) => ({
    game: graphql.game
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({
        loadWorld,
        unsetGame,
        createGameSubmit
    }, dispatch);

const frontload = props => {
    const {world, computedMatch: {params: {worldId}}} = props;
    const worldLoaded = world && world.id === worldId;

    if (!worldLoaded) {
        props.loadWorld(worldId);
    }
    props.unsetGame();
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    frontloadConnect(frontload, {
        onUpdate: false
    })(Game)
);
