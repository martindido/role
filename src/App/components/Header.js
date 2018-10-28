import React, { Component } from 'react';
import {
    Menu,
    Image,
    Search
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
            <Menu id='header' fixed='top' stackable>
                <Menu.Item header>
                    <Image src={ logo } alt='Logo' className='logo' size='mini' />{ currentUser.username }
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Search placeholder='Search...' size='large' className='transparent' />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}
