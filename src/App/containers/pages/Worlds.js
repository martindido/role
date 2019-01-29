import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { frontloadConnect } from 'react-frontload';
import Worlds from '../../components/pages/Worlds';
import { loadWorlds } from '../../actions/load';

import type { State } from '../../types/State';

const mapStateToProps = ({ graphql: { worlds } }: State) => ({
    worlds
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators(
        {
            loadWorlds
        },
        dispatch
    );

const frontload = async props => {
    props.loadWorlds();
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    frontloadConnect(frontload, {
        onUpdate: false
    })(Worlds)
);
