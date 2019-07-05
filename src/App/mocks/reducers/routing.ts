import { location } from '../../mocks/router';
import { RoutingState } from '../../types/State/Routing';

export const stateLoading: RoutingState = {
    isLoading: true,
    isNotFound: false
};

export const stateNotFound: RoutingState = {
    isLoading: false,
    isNotFound: true
};

export const stateWithPreviousLocation: RoutingState = {
    isLoading: false,
    isNotFound: false,
    previousLocation: location
};
