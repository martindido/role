import { RouteProps } from 'react-router-dom';

import { AuthenticatedRouteConfigProps } from './Authenticated';

export type AdminRouteStateProps = Readonly<{
    isAdmin: boolean;
}>;

export type AdminRouteProps = RouteProps & AdminRouteStateProps & AuthenticatedRouteConfigProps;
