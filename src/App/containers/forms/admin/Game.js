import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Game from '../../../components/forms/admin/Game';

import type { State } from '../../../types/State';

const mapStateToProps = ({graphql}: State) => {
    const props = {
        initialValues: graphql.game ? {
            id: graphql.game.id,
            name: graphql.game.name,
            path: graphql.game.path,
            gameWorldId: graphql.game.world.id
        } : graphql.world ? {
            gameWorldId: graphql.world.id
        } : {}
    };

    return props;
};

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(reduxForm({
    enableReinitialize: true
})(Game));
