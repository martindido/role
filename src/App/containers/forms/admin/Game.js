import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';
import Game from '../../../components/forms/admin/Game';

import type { State } from '../../../types/State';

const selector = formValueSelector('edit-game');
const mapStateToProps = (state: State) => ({
    game: state.graphql.game,
    selectedValues: {
        logo: selector(state, 'logo')
    },
    initialValues: {
        game: state.graphql.game ? {
            id: state.graphql.game.id,
            name: state.graphql.game.name,
            slug: state.graphql.game.slug,
            // logo: state.graphql.game.logo,
            logoExt: state.graphql.game.logoExt,
            gameWorldId: state.graphql.game.world.id
        } : state.graphql.world ? {
            gameWorldId: state.graphql.world.id
        } : {}
    }
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(reduxForm({
    enableReinitialize: true
})(Game));
