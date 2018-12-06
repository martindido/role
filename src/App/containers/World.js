import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { frontloadConnect } from 'react-frontload';
import World from '../components/World';
import { getWorld, unsetWorld } from '../actions/graphql';
import { setLoading, setNotFound } from '../actions/routing';

import type { State } from '../types/State';

const mapStateToProps = ({ graphql, routing }: State) => ({
    world: graphql.world,
    isNotFound: routing.isNotFound,
    isLoading: routing.isLoading
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({
        getWorld,
        unsetWorld,
        setLoading,
        setNotFound
    }, dispatch);

const frontload = async props => {
    await props.setLoading(true);
    await props.getWorld(props.computedMatch.params.id);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    frontloadConnect(frontload, {
        onUpdate: false
    })(World)
);
