import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { frontloadConnect } from 'react-frontload';
import { setLoading, setNotFound } from '../../actions/routing';
import { getWorld } from '../../actions/graphql';
import { updateWorldSubmit } from '../../actions/submit';
import World from '../../components/admin/World';

const mapStateToProps = ({routing, graphql}) => ({
    world: graphql.world,
    isLoading: routing.isLoading,
    isNotFound: routing.isNotFound
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({
        setLoading,
        setNotFound,
        getWorld,
        updateWorldSubmit
    }, dispatch);

const frontload = props => {
    if (props.computedMatch.params.id) {
        props.setLoading(true);
        props.getWorld(props.computedMatch.params.id);
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    frontloadConnect(frontload, {
        onUpdate: false
    })(World)
);
