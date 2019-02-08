import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu as SemanticMenu, Image, Responsive } from 'semantic-ui-react';
import logo from '../../images/logo.png';
import Search from '../../containers/header/Search';
import Menu from '../../containers/header/Menu';

import '../../styles/Header.css';

import type { User } from '../../types/User';
import type { MenuProps } from './Menu';

type StateProps = {
    currentUser: User
};
export type Props = {
    menu?: MenuProps,
    withSearch?: boolean,
    forceLoading?: boolean
};

export default class Header extends Component<StateProps & Props> {
    static defaultProps = {
        menu: {},
        withSearch: true,
        forceLoading: false
    };

    render() {
        const { forceLoading, currentUser, menu, withSearch } = this.props;
        const search = withSearch && <Search />;

        return (
            <Container id='header'>
                <SemanticMenu fixed='top' icon>
                    <SemanticMenu.Item as={Link} to='/' header>
                        <Image src={logo} alt='Logo' className='logo' size='mini' />
                        {currentUser.username}
                    </SemanticMenu.Item>
                    <SemanticMenu.Menu position='right'>
                        <Menu {...menu} forceLoading={forceLoading} />
                        {search ? (
                            <Responsive minWidth={768} as={SemanticMenu.Item} fixed='top'>
                                {search}
                            </Responsive>
                        ) : (
                            ''
                        )}
                    </SemanticMenu.Menu>
                </SemanticMenu>
                {search ? (
                    <Responsive maxWidth={768} as={SemanticMenu} id='search' fixed='top' stackable>
                        <SemanticMenu.Item position='right'>{search}</SemanticMenu.Item>
                    </Responsive>
                ) : (
                    ''
                )}
            </Container>
        );
    }
}
