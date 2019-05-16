import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Image, Menu as SemanticMenu, Responsive } from 'semantic-ui-react';

import Menu from '../../containers/header/Menu';
import Search from '../../containers/header/Search';
import logo from '../../images/logo.png';
import '../../styles/Header.css';
import { HeaderProps } from '../../types/Props/Header/Header';
import { createPropsGetter } from '../../utils/props';

export default class Header extends Component<HeaderProps> {
    static defaultProps = {
        currentUser: {
            username: ''
        },
        withSearch: true,
        forceLoading: false
    };

    static getProps = createPropsGetter(Header.defaultProps);

    render() {
        const { forceLoading, currentUser, menu, withSearch } = Header.getProps(this.props);
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
                        <SemanticMenu.Item position='right'> {search} </SemanticMenu.Item>
                    </Responsive>
                ) : (
                    ''
                )}
            </Container>
        );
    }
}
