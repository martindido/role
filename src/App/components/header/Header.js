import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {
    Container,
    Menu as SemanticMenu,
    Image,
    Responsive
} from 'semantic-ui-react';
import logo from '../../images/logo.png';
import Search from '../../containers/header/Search';
import Menu from '../../containers/header/Menu';

import '../../styles/Header.css';

import type { User } from '../../types/User';
import type { MenuProps } from './Menu';

export type Props = {
    currentUser: User,
    menu?: MenuProps
};

export default class Header extends Component<Props> {
    static defaultProps = {
        menu: {}
    }

    render() {
        const { currentUser, menu } = this.props;
        const search = ( <Search /> );

        return (
            <Container id='header'>
                <SemanticMenu fixed='top' icon>
                    <SemanticMenu.Item as={ Link } to='/' header>
                        <Image src={ logo } alt='Logo' className='logo' size='mini' />{ currentUser.username }
                    </SemanticMenu.Item>
                    <SemanticMenu.Menu position='right'>
                        <Menu { ...menu } />
                        { search ? (
                            <Responsive minWidth={ 768 } as={ SemanticMenu.Item } fixed='top'>
                                { search }
                            </Responsive>
                        ) : '' }
                    </SemanticMenu.Menu>
                </SemanticMenu>
                { search ? (
                    <Responsive maxWidth={ 768 } as={ SemanticMenu } id='search' fixed='top' stackable>
                        <SemanticMenu.Item position='right'>
                            { search }
                        </SemanticMenu.Item>
                    </Responsive>
                ) : '' }
            </Container>
        );
    }
}
