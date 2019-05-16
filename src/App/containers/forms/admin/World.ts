import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector, reduxForm } from 'redux-form';

import World from '../../../components/forms/admin/World';
import { Action } from '../../../types/Action';
import { WorldAdminFormData, WorldAdminFormStateProps } from '../../../types/Form/Admin/World';
import { State } from '../../../types/State';

const selector = formValueSelector('edit-world');
const mapStateToProps = (state: State): WorldAdminFormStateProps => ({
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
                  logo: {
                      name: state.graphql.world.logo.name,
                      size: state.graphql.world.logo.size,
                      type: state.graphql.world.logo.type,
                      extension: state.graphql.world.logo.extension
                  }
              }
            : {}
    }
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    reduxForm<WorldAdminFormData, WorldAdminFormStateProps>({
        enableReinitialize: true
    })(World)
);
