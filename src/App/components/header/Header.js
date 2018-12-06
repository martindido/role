import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Menu,
    Image,
    Icon,
    Responsive
} from 'semantic-ui-react';
import logo from '../../images/logo.png';
import Search from '../../containers/header/Search';

import '../../styles/Header.css';

import type { User } from '../../types/User';
import type { Props as SearchProps } from './Search';
import type { RouterHistory, Location } from 'react-router-dom';

export type Props = {
    currentUser: User,
    history: RouterHistory,
    location: Location,
    search: SearchProps
};

export default class Header extends Component<Props> {
    handleClickBack = () => {
        this.props.history.goBack();
    }

    render() {
        const { currentUser, location } = this.props;
        const search = ( <Search /> );

        return (
            <Container id='header'>
                <Menu fixed='top' icon>
                    <Menu.Item header>
                        <Image src={ logo } alt='Logo' className='logo' size='mini' />{ currentUser.username }
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        { location.pathname === '/' ? '' : (
                            <Menu.Item name='back' onClick={ this.handleClickBack } >
                                <Icon name='backward' />
                            </Menu.Item>
                        ) }
                        { currentUser.isAdmin ? (
                            <Menu.Item as={ Link } name='admin-worlds' to='/admin/worlds'>
                                <Icon name='add' />
                            </Menu.Item>
                        ) : '' }
                        <Menu.Item as={ Link } name='sign-out' to='/sign-out'>
                            <Icon name='sign-out' />
                        </Menu.Item>
                        { search ? (
                            <Responsive minWidth={ 768 } as={ Menu.Item } fixed='top'>
                                { search }
                            </Responsive>
                        ) : '' }
                    </Menu.Menu>
                </Menu>
                { search ? (
                    <Responsive maxWidth={ 768 } as={ Menu } id='search' fixed='top' stackable>
                        <Menu.Item position='right'>
                            { search }
                        </Menu.Item>
                    </Responsive>
                ) : '' }
            </Container>
        );
    }
}
