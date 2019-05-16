import { ComponentType } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';

export type UnauthenticatedRouteStateProps = Readonly<{
    isAuthenticated: boolean;
}>;

export type UnauthenticatedRouteConfigProps = Readonly<{
    component: ComponentType<RouteComponentProps<any>> | ComponentType<any>;
}>;

export type UnauthenticatedRouteProps = RouteProps &
    RouteComponentProps &
    UnauthenticatedRouteStateProps &
    UnauthenticatedRouteConfigProps;
