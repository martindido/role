import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { frontloadConnect } from 'react-frontload';
import Worlds from '../../components/pages/Worlds';
import { getWorlds } from '../../actions/graphql';
import { setLoading } from '../../actions/routing';

import type { State } from '../../types/State';

const mapStateToProps = ({graphql: {worlds}, routing: {isLoading}}: State) => ({
    worlds,
    isLoading
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({
        getWorlds,
        setLoading
    }, dispatch);

const frontload = async props => {
    await props.setLoading(true);
    await props.getWorlds();
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    frontloadConnect(frontload, {
        onUpdate: false
    })(Worlds)
);
