import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { frontloadConnect } from 'react-frontload';
import { loadGame } from '../../../actions/load';
import { updateGameSubmit } from '../../../actions/submit';
import Game from '../../../components/admin/update/Game';

const mapStateToProps = ({routing, graphql}) => ({
    game: graphql.game,
    isNotFound: routing.isNotFound
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({
        loadGame,
        updateGameSubmit
    }, dispatch);

const frontload = props => {
    const {computedMatch: {params: {gameId}}} = props;

    props.loadGame(gameId);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    frontloadConnect(frontload, {
        onUpdate: false
    })(Game)
);
