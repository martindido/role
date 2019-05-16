import { ComponentType } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';

export type DualRouteStateProps = Readonly<{
    isAuthenticated: boolean;
}>;

export type DualRouteConfigProps = Readonly<{
    authenticatedComponent: ComponentType<RouteComponentProps<any>> | ComponentType<any>;
    unauthenticatedComponent: ComponentType<RouteComponentProps<any>> | ComponentType<any>;
}>;

export type DualRouteProps = RouteProps & DualRouteStateProps & DualRouteConfigProps;
