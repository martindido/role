import React, { Component } from 'react';
import Page from "../containers/Page";
import Loading from "./Loading";
import NotFound from "../containers/NotFound";

import { Paragraph } from "../styles";

import type { Profile as ProfileType } from "../types/Profile";
import type {
    SetLoadingAction,
    SetNotFoundAction,
    GetCurrentProfileAction,
    UnsetCurrentProfileAction
} from "../types/Action";

type Props = {
    currentProfile: ProfileType,
    setLoading: boolean => SetLoadingAction,
    setNotFound: boolean => SetNotFoundAction,
    getCurrentProfile: number => GetCurrentProfileAction,
    unsetCurrentProfile: () => UnsetCurrentProfileAction,
    match: {
        params: {
            id: number
        }
    },
    isLoading: boolean,
    isNotFound: boolean
};

export default class Profile extends Component<Props> {
    static defaultProps = {
        isLoading: false,
        isNotFound: false
    }

    componentDidUpdate(prevProps: Props) {
        const isSameProfile = !!this.props.currentProfile && +this.props.match.params.id === this.props.currentProfile.id;

        if (!this.props.isNotFound) {
            if (!isSameProfile && !this.props.isLoading) {
                this.props.getCurrentProfile(+this.props.match.params.id);
                this.props.setLoading(true);
            }
            else if (isSameProfile && this.props.isLoading) {
                this.props.setLoading(false);
            }
        }
        else if (this.props.isLoading) {
            this.props.setLoading(false);
        }
        else if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.setNotFound(false);
        }
    }

    componentWillUnmount() {
        if (this.props.currentProfile) {
            this.props.unsetCurrentProfile();
        }
        if (this.props.isNotFound) {
            this.props.setNotFound(false);
        }
    }

    render() {
        const { isLoading, isNotFound, currentProfile } = this.props;

        if (isNotFound && !isLoading) {
            return (<NotFound />);
        }
        if (isLoading || !currentProfile) {
            return (<Loading />);
        }
        return (
            <Page
                id="Profile"
                className="profile"
                title={ currentProfile.name }
                description={ `This is user profile number ${currentProfile.id}` }
                image={ currentProfile.image }
            >
                <Paragraph>
                    <b>Name:</b> { currentProfile.name }
                </Paragraph>
                <Paragraph>
                    <b>ID:</b> { currentProfile.id }
                </Paragraph>
                <img src={ currentProfile.image } alt={ currentProfile.name } style={{ width: '400px' }} />
            </Page>
        );
    }
}
