import { Component } from 'react';

import type { SignOutAction } from '../types/Action';
import type { RouterHistory } from 'react-router';
type Props = {|
    signOut: () => SignOutAction,
    history: RouterHistory
|}

export default class SignOut extends Component<Props> {
    componentWillMount() {
        this.props.signOut();
        this.props.history.push('/');
    }

    render() {
        return null;
    }
}
