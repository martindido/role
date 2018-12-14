import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import World from '../../../components/forms/admin/World';

import type { State } from '../../../types/State';

const mapStateToProps = ({graphql}: State) => ({
    initialValues: graphql.world ? {
        id: graphql.world.id,
        name: graphql.world.name,
        path: graphql.world.path
    } : {}
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(reduxForm({
    enableReinitialize: true
})(World));
