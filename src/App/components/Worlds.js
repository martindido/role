import React, { Component } from 'react';
import Page from '../containers/pages/Worlds';
import Header from '../containers/Header';
import Loading from '../containers/pages/Loading';
import { Link } from 'react-router-dom';
import {
    Segment,
    List,
    Image
} from 'semantic-ui-react';

import '../styles/Worlds.css';

import type { World } from '../types/World';
import type { SetLoadingAction } from '../types/Action';
type Props = {
    worlds: Array<World>,
    setLoading: boolean => SetLoadingAction,
    isLoading: boolean
};

export default class Worlds extends Component<Props> {
    componentDidUpdate(prevProps: Props) {
        const hasWorldsChanged = this.props.worlds !== prevProps.worlds || this.props.worlds.length !== prevProps.worlds.length;

        if (hasWorldsChanged && this.props.isLoading) {
            this.props.setLoading(false);
        }
    }

    componentWillUnmount() {
        if (this.props.isLoading) {
            this.props.setLoading(false);
        }
    }

    render() {
        const PageContainer = this.getPageContainer();

        return (
            <PageContainer>
                <Header/>
                {this.props.worlds.length ? (
                    <Segment basic>
                        <List animated divided selection verticalAlign='middle' size='massive' inverted>
                            { this.props.worlds.map(world => (
                                <List.Item as={ Link } to={ `/worlds/${world.id}` } key={ world.id } >
                                    <Image avatar src={
                                        require(`../images/worlds/dungeons-and-dragons-logo.png`)
                                    } />
                                    <List.Content>
                                        <List.Header>{ world.name }</List.Header>
                                    </List.Content>
                                </List.Item>
                            )) }
                        </List>
                    </Segment>
                ) : null}
            </PageContainer>
        );
    }

    getPageContainer() {
        if (this.props.isLoading) {
            return Loading;
        }
        return Page;
    }
}
