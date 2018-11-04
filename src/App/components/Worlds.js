import React, { Component } from 'react';
import Page from "../containers/Page";
import Header from "../containers/Header";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import {
    Segment,
    List,
    Image
} from "semantic-ui-react";

import '../styles/Worlds.css';

type Props = {
    worlds: []
};

export default class Worlds extends Component<Props> {
    render() {
        return (
            <Page id="Worlds" title="Worlds">
                <Header/>
                {this.props.worlds.length ? (
                    <Segment basic>
                        <List animated divided selection verticalAlign='middle' size='massive' inverted>
                            { this.props.worlds.map(world => (
                                <List.Item as={ Link } to={ `/worlds/${world.path}` } key={ world.id } >
                                    <Image avatar src={
                                        // $FlowFixMe
                                        require(`../images/worlds/dungeons-and-dragons-logo.png`)
                                    } />
                                    <List.Content>
                                        <List.Header>{ world.name }</List.Header>
                                    </List.Content>
                                </List.Item>
                            )) }
                        </List>
                    </Segment>
                ) : (
                    <Loading />
                )}
            </Page>
        );
    }
}
