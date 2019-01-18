import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';
import World from '../../../components/forms/admin/World';

import type { State } from '../../../types/State';

const selector = formValueSelector('edit-world');
const mapStateToProps = (state: State) => ({
    world: state.graphql.world,
    selectedValues: {
        logo: selector(state, 'logo')
    },
    initialValues: {
        world: state.graphql.world
            ? {
                  id: state.graphql.world.id,
                  name: state.graphql.world.name,
                  slug: state.graphql.world.slug,
                  logo: state.graphql.world.logo
              }
            : {}
    }
});

const mapDispatchToProps = (dispatch: *) => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    reduxForm({
        enableReinitialize: true
    })(World)
);
