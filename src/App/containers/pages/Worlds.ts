import { frontloadConnect } from 'react-frontload';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { loadWorlds } from '../../actions/load';
import Worlds from '../../components/pages/Worlds';
import { Action } from '../../types/Action';
import { WorldsPageProps } from '../../types/Props/Pages/Worlds';
import { State } from '../../types/State';

const mapStateToProps = ({ graphql: { worlds } }: State) => ({
    worlds
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) =>
    bindActionCreators(
        {
            loadWorlds
        },
        dispatch
    );

const frontload = async (props: WorldsPageProps) => {
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
