import { Location } from 'history';

export type RoutingState = {
    readonly isLoading: boolean;
    readonly isNotFound: boolean;
    readonly previousLocation?: Location;
};
