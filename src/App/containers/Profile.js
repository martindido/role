import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Profile from '../components/Profile';
import { frontloadConnect } from 'react-frontload';
import { setLoading, setNotFound } from '../actions/routing';
import {
    getCurrentProfile,
    unsetCurrentProfile
} from '../actions/profile';

import type { State } from "../types/State";

const mapStateToProps = ({ routing, profile }: State) => {
    return {
        isLoading: routing.isLoading,
        isNotFound: routing.isNotFound,
        currentProfile: profile.currentProfile
    };
};

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({
        setLoading,
        setNotFound,
        getCurrentProfile,
        unsetCurrentProfile
    }, dispatch);

const frontload = async props =>
    await props.getCurrentProfile(+props.match.params.id);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    frontloadConnect(frontload, {
        onUpdate: false
    })(Profile)
);
