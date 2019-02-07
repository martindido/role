import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { frontloadConnect } from 'react-frontload';
import { getTranslate } from 'react-localize-redux';
import { loadGame } from '../../../actions/load';
import { updateGameSync } from '../../../actions/sync';
import Game from '../../../components/admin/update/Game';

const mapStateToProps = ({ localize, routing, graphql }) => ({
    translate: getTranslate(localize),
    game: graphql.game,
    isNotFound: routing.isNotFound
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators(
        {
            loadGame,
            updateGameSync
        },
        dispatch
    );

const frontload = props => {
    const {
        computedMatch: {
            params: { gameId }
        }
    } = props;

    props.loadGame(gameId);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    frontloadConnect(frontload, {
        onUpdate: false
    })(Game)
);
