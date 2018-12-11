import React, { Component } from 'react';
import Page from '../../containers/pages/Page';
import { Link } from 'react-router-dom';
import {
    List,
    Image
} from 'semantic-ui-react';

import '../../styles/Worlds.css';

import type { World } from '../../types/World';
import type { SetLoadingActionCreator } from '../../types/ActionCreator';

type Props = {
    worlds: Array<World>,
    setLoading: SetLoadingActionCreator,
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
        const header = {
            menu: {
                admin: {
                    items: [{
                        key: 'worlds',
                        path: '/worlds',
                        icon: 'add'
                    }]
                }
            }
        };

        return (
            <Page id='worlds' title='Worlds' header={ header }>
                { this.props.worlds.length ? (
                    <List animated divided selection verticalAlign='middle' size='massive' inverted>
                        { this.props.worlds.map(world => (
                            <List.Item as={ Link } to={ `/worlds/${ world.id }` } key={ world.id }>
                                <Image avatar src={
                                    require(`../../images/worlds/dungeons-and-dragons-logo.png`)
                                }/>
                                <List.Content>
                                    <List.Header>{ world.name }</List.Header>
                                </List.Content>
                            </List.Item>
                        )) }
                    </List>
                ) : null }
            </Page>
        );
    }
}
