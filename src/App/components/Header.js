import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Header as StyledHeader, Title, Nav, NavLink } from '../styles/Header';

const links = [{
    to: '/',
    text: 'Homepage'
}, {
    to: '/about',
    text: 'About'
}, {
    to: '/counter',
    text: 'Counter'
}, {
    to: '/login',
    text: 'Login',
    auth: false
}];
const isCurrent = (to, current) => {
    if (to === '/' && current === to) {
        return true;
    } else if (to !== '/' && current.includes(to)) {
        return true;
    }
    return false;
};


type LinkProps = {
    to: string,
    current: string,
    text: string
};
type Props = {
    isAuthenticated: boolean,
    current: string
};

class HeaderLink extends Component<LinkProps> {
    render() {
        const to = this.props.to;
        const current = this.props.current;
        const text = this.props.text;

        return (
            <NavLink className={isCurrent(to, current) ? 'current' : ''}>
                <Link to={to}>{text}</Link>
            </NavLink>
        );
    };
}

export default class Header extends Component<Props> {
    render() {
        const { isAuthenticated, current } = this.props;

        return (
            <StyledHeader className="header">
                <Title className="title">Role</Title>
                <Nav className="links">
                    { links.map((link, index) => {
                        const headerLink = <HeaderLink key={index} current={current} {...link} />;

                        if (!link.hasOwnProperty('auth')) {
                            return headerLink;
                        }
                        if (link.auth && isAuthenticated) {
                            return headerLink;
                        }
                        if (!link.auth && !isAuthenticated) {
                            return headerLink;
                        }
                        return null;
                    }) }
                </Nav>
            </StyledHeader>
        );
    }
}