import React, { Component } from 'react';
import {
    Container,
    Menu,
    Image,
    Icon,
    Search,
    Responsive
} from "semantic-ui-react";
import logo from "../images/logo.png";

import '../styles/Header.css';

import type { User } from '../types/User';
type Props = {
    currentUser: User
};

export default class Header extends Component<Props> {
    render() {
        const { currentUser } = this.props;

        return (
            <Container id='header'>
                <Menu fixed='top' icon>
                    <Menu.Item header>
                        <Image src={ logo } alt='Logo' className='logo' size='mini' />{ currentUser.username }
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Icon name='gamepad' />
                        </Menu.Item>
                        <Responsive minWidth={ 768 } as={ Menu.Item } fixed='top'>
                            <Search placeholder='Search...' size='large' className='transparent' />
                        </Responsive>
                    </Menu.Menu>
                </Menu>
                <Responsive maxWidth={ 768 } as={ Menu } id='search' fixed='top' stackable>
                    <Menu.Item position='right'>
                        <Search placeholder='Search...' size='large' className='transparent' />
                    </Menu.Item>
                </Responsive>
            </Container>
        );
    }
}
