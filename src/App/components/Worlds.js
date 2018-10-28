import React, { Component } from 'react';
import Page from "../containers/Page";
import Header from "../containers/Header";
import { Link } from "react-router-dom";
import {
Segment,
List,
Image
} from "semantic-ui-react";
import WoDLogo from '../images/worlds/WoDLogo.png';
import DaDLogo from '../images/worlds/DaDLogo.png';
import L5RLogo from '../images/worlds/L5RLogo.png';

import '../styles/Worlds.css';

const worlds = [{
    id: 'world-of-darkness',
    logo: WoDLogo,
    text: 'World of Darkness'
}, {
    id: 'dungeons-and-dragons',
    logo: DaDLogo,
    text: 'Dungeons & Dragons'
}, {
    id: 'legend-of-the-five-rings',
    logo: L5RLogo,
    text: 'Legend of the Five Rings'
}];

type Props = {};

export default class Worlds extends Component<Props> {
    render() {
        return (
            <Page id="Worlds" title="Worlds">
                <Header/>
                <Segment basic>
                    <List animated divided selection verticalAlign='middle' size='massive' inverted>
                        { worlds.map(world => (
                            <List.Item as={ Link } to={ `/worlds/${world.id}` } key={ world.id } >
                                <Image avatar src={ world.logo } />
                                <List.Content>
                                    <List.Header>{ world.text }</List.Header>
                                </List.Content>
                            </List.Item>
                        )) }
                    </List>
                </Segment>
            </Page>
        );
    }
}
