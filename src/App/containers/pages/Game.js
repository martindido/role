import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { frontloadConnect } from 'react-frontload';
import Game from '../../components/pages/Game';
import { loadGame } from '../../actions/load';

import type { State } from '../../types/State';

const mapStateToProps = ({ graphql }: State) => ({
    game: graphql.game
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators(
        {
            loadGame
        },
        dispatch
    );

const frontload = async props => {
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
