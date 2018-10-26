import { Component } from 'react';

import type { LogoutAction } from '../types/Action';
import type { RouterHistory } from 'react-router';
type Props = {|
    logout: () => LogoutAction,
    history: RouterHistory
|}

export default class Logout extends Component<Props> {
    componentWillMount() {
        this.props.logout();
        this.props.history.push('/');
    }

    render() {
        return null;
    }
}
