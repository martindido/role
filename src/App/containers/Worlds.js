import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { frontloadConnect } from "react-frontload";
import Worlds from '../components/Worlds';
import { getWorlds } from "../actions/graphql";

import type { State } from "../types/State";

const mapStateToProps = ({ graphql: { worlds } }: State) => ({
    worlds
});

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({
        getWorlds
    }, dispatch);

const frontload = async props =>
    await props.getWorlds();

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    frontloadConnect(frontload, {
        onUpdate: false
    })(Worlds)
);
