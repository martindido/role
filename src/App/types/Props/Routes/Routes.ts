import { RouteComponentProps } from 'react-router-dom';

import { SetNotFoundActionCreator, SetPreviousLocationActionCreator } from '../../Action/Routing';

export type RoutesDispatchProps = Readonly<{
    setNotFound: SetNotFoundActionCreator;
    setPreviousLocation: SetPreviousLocationActionCreator;
}>;

export type RoutesProps = RoutesDispatchProps & RouteComponentProps;
