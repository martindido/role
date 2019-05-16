import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Menu as SemanticMenu } from 'semantic-ui-react';

import { AdminMenuItemProps, AdminMenuProps } from '../../types/Props/Header/AdminMenu';
import { createPropsGetter } from '../../utils/props';

export class AdminMenu extends Component<AdminMenuProps> {
    static defaultProps = {
        items: [] as AdminMenuItemProps[]
    };

    static getProps = createPropsGetter(AdminMenu.defaultProps);

    render() {
        const { items } = AdminMenu.getProps(this.props);

        return items.map((item) => (
            <SemanticMenu.Item as={Link} key={`${item.key}-admin`} to={`${item.path}/admin`}>
                <Icon name={item.icon} />
            </SemanticMenu.Item>
        ));
    }
}
