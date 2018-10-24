import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import {
    increment,
    decrement,
    completeUpdate
} from '../actions/counter';

import type { State } from '../types/State';

const mapStateToProps = ({ counter }: State) => ({
    counter
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({
        increment,
        decrement,
        completeUpdate
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
