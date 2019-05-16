import { LocalizeContextProps } from 'react-localize-redux';
import { RouteComponentProps } from 'react-router-dom';

import { SearchAllActionCreator } from '../../Action/GraphQL';
import { SetSearchLoadingActionCreator, UnsetSearchResultsActionCreator } from '../../Action/Search';
import { SearchResults } from '../../Search';

export type SearchProps = Readonly<{
    searchAll: SearchAllActionCreator;
    setSearchLoading: SetSearchLoadingActionCreator;
    unsetSearchResults: UnsetSearchResultsActionCreator;
    isLoading: boolean;
    results: SearchResults;
}> &
    RouteComponentProps &
    LocalizeContextProps;
