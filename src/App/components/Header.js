import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
    to: '/profile/1',
    text: 'Profile 1'
}, {
    to: '/profile/2',
    text: 'Profile 2'
}, {
    to: '/profile/3',
    text: 'Profile 3'
}, {
    to: '/dashboard',
    text: 'Dashboard',
    auth: true
}, {
    to: '/signIn',
    text: 'SignIn',
    auth: false
}, {
    to: '/logout',
    text: 'Logout',
    auth: true
}, {
    to: '/not-found',
    text: 'Not Found'
}];

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
    isCurrent(to, current) {
        if (to === '/' && current === to) {
            return true;
        }
        if (to !== '/' && current.includes(to)) {
            return true;
        }
        return false;
    };

    render() {
        const to = this.props.to;
        const current = this.props.current;
        const text = this.props.text;

        return (
            <li className={this.isCurrent(to, current) ? 'current' : ''}>
                <Link to={to}>{text}</Link>
            </li>
        );
    };
}

export default class Header extends Component<Props> {
    render() {
        const { isAuthenticated, current } = this.props;

        return (
            <header className="header">
                <h1 className="title">Role</h1>
                <ul className="links">
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
                </ul>
            </header>
        );
    }
}
