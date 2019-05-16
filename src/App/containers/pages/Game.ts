import { frontloadConnect } from 'react-frontload';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { loadGame } from '../../actions/load';
import Game from '../../components/pages/Game';
import { Action } from '../../types/Action';
import { GamePageProps } from '../../types/Props/Pages/Game';
import { State } from '../../types/State';

const mapStateToProps = ({ graphql }: State) => ({
    game: graphql.game
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) =>
    bindActionCreators(
        {
            loadGame
        },
        dispatch
    );

const frontload = async (props: GamePageProps) => {
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
