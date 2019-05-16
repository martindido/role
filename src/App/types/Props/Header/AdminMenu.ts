import { SemanticICONS } from 'semantic-ui-react';

export type AdminMenuItemProps = Readonly<{
    key: string;
    path: string;
    icon: SemanticICONS;
}>;

export type AdminMenuDefaultProps = Readonly<{
    items: AdminMenuItemProps[];
}>;

export type AdminMenuProps = Partial<AdminMenuDefaultProps>;
