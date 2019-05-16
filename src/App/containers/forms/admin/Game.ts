import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector, reduxForm } from 'redux-form';

import Game from '../../../components/forms/admin/Game';
import { Action } from '../../../types/Action';
import { GameAdminFormData, GameAdminFormStateProps } from '../../../types/Form/Admin/Game';
import { State } from '../../../types/State';

const selector = formValueSelector('edit-game');
const mapStateToProps = (state: State): GameAdminFormStateProps => ({
    game: state.graphql.game,
    selectedValues: {
        logo: selector(state, 'logo')
    },
    initialValues: {
        game: state.graphql.game
            ? {
                  id: state.graphql.game.id,
                  name: state.graphql.game.name,
                  slug: state.graphql.game.slug,
                  logo: {
                      name: state.graphql.game.logo.name,
                      size: state.graphql.game.logo.size,
                      type: state.graphql.game.logo.type,
                      extension: state.graphql.game.logo.extension
                  },
                  gameWorldId: state.graphql.game.world.id
              }
            : state.graphql.world
            ? {
                  gameWorldId: state.graphql.world.id
              }
            : {}
    }
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    reduxForm<GameAdminFormData, GameAdminFormStateProps>({
        enableReinitialize: true
    })(Game)
);
