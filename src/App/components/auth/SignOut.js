import { Component } from 'react';

import type { RouterHistory } from 'react-router-dom';
import type { SignOutActionCreator } from '../../types/ActionCreator';

type Props = {
    signOut: SignOutActionCreator,
    history: RouterHistory
}

export default class SignOut extends Component<Props> {
    componentWillMount() {
        this.props.signOut();
        this.props.history.push('/');
    }

    render() {
        return null;
    }
}
