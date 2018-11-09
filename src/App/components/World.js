import React, { Component } from 'react';
import Page from '../containers/pages/World';
import Header from "../containers/Header";
import Loading from "../containers/pages/Loading";
import NotFound from '../containers/pages/NotFound';
import {
    Segment,
    Image,
    Header as SemanticHeader
} from 'semantic-ui-react';

import '../styles/Worlds.css';

import type { World as WorldType } from '../types/World';
import type {
    SetLoadingAction,
    SetNotFoundAction,
    UnsetWorldAction
} from '../types/Action';
export type Props = {
    world?: WorldType,
    unsetWorld: () => UnsetWorldAction,
    setLoading: boolean => SetLoadingAction,
    setNotFound: boolean => SetNotFoundAction,
    isLoading: boolean,
    isNotFound: boolean
};

export default class World extends Component<Props> {
    componentDidUpdate(prevProps: Props) {
        if (this.props.world !== prevProps.world && this.props.isLoading) {
            this.props.setLoading(false);
        }
    }

    componentWillUnmount() {
        if (this.props.world) {
            this.props.unsetWorld();
        }
        if (this.props.isNotFound) {
            this.props.setNotFound(false);
        }
        if (this.props.isLoading) {
            this.props.setLoading(false);
        }
    }

    render() {
        const PageContainer = this.getPageContainer();

        return (
            <PageContainer>
                <Header/>
                { this.props.world ? (
                    <Segment basic>
                        <SemanticHeader as='h2' inverted>
                            <Image circular src={
                                require(`../images/worlds/dungeons-and-dragons-logo.png`)
                            } /> { this.props.world.name }
                        </SemanticHeader>
                    </Segment>
                ) : null }
            </PageContainer>
        );
    }

    getPageContainer() {
        if (this.props.isNotFound) {
            return NotFound;
        }
        if (this.props.isLoading || !this.props.world) {
            return Loading;
        }
        return Page;
    }
}
