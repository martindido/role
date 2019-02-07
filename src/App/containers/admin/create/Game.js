import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { frontloadConnect } from 'react-frontload';
import { getTranslate } from 'react-localize-redux';
import { loadWorld } from '../../../actions/load';
import { unsetGame } from '../../../actions/graphql';
import { createGameSync } from '../../../actions/sync';
import Game from '../../../components/admin/create/Game';

const mapStateToProps = ({ localize, graphql }) => ({
    translate: getTranslate(localize),
    game: graphql.game
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators(
        {
            loadWorld,
            unsetGame,
            createGameSync
        },
        dispatch
    );

const frontload = props => {
    const {
        computedMatch: {
            params: { worldId }
        }
    } = props;

    props.unsetGame();
    props.loadWorld(worldId);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    frontloadConnect(frontload, {
        onUpdate: false
    })(Game)
);
