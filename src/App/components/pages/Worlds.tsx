import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image, List } from 'semantic-ui-react';

import Page from '../../containers/pages/Page';
import '../../styles/Worlds.css';
import { HeaderConfigProps } from '../../types/Props/Header/Header';
import { WorldsPageProps } from '../../types/Props/Pages/Worlds';

export default class Worlds extends Component<WorldsPageProps> {
    private static headerConfig: HeaderConfigProps = {
        menu: {
            admin: {
                items: [
                    {
                        key: 'worlds',
                        path: '/worlds',
                        icon: 'add'
                    }
                ]
            }
        }
    };

    render() {
        return (
            <Page id='worlds' title='Worlds' header={Worlds.headerConfig}>
                {this.props.worlds.length ? (
                    <List animated divided selection verticalAlign='middle' size='massive' inverted>
                        {this.props.worlds.map((world) => (
                            <List.Item as={Link} to={`/worlds/${world.id}`} key={world.id}>
                                <Image src={world.logo.src} avatar />
                                <List.Content>
                                    <List.Header>{world.name}</List.Header>
                                </List.Content>
                            </List.Item>
                        ))}
                    </List>
                ) : null}
            </Page>
        );
    }
}
