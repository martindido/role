import { ComponentType } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';

export type AuthenticatedRouteDefaultProps = Readonly<{
    canAccess: boolean;
}>;

export type AuthenticatedRouteStateProps = Readonly<{
    isAuthenticated: boolean;
}>;

export type AuthenticatedRouteConfigProps = Readonly<{
    component: ComponentType<RouteComponentProps<any>> | ComponentType<any>;
    to?: string;
}>;

export type AuthenticatedRouteProps = RouteProps &
    Partial<AuthenticatedRouteDefaultProps> &
    AuthenticatedRouteStateProps &
    RouteComponentProps &
    AuthenticatedRouteConfigProps;
