import React, { Component } from 'react';
import { Search as SemanticSearch } from 'semantic-ui-react';

import type { SearchResults, SearchResult } from '../../types/Search';
import type { RouterHistory } from 'react-router-dom';
import type {
    UnsetSearchResultsActionCreator,
    SetSearchLoadingActionCreator,
    SearchAllActionCreator
} from '../../types/ActionCreator';
import type { Translate } from '../../types/Locale';

export type Props = {
    searchAll: SearchAllActionCreator,
    setSearchLoading: SetSearchLoadingActionCreator,
    unsetSearchResults: UnsetSearchResultsActionCreator,
    isLoading: boolean,
    results: SearchResults,
    history: RouterHistory,
    translate: Translate
};
export type Value = {
    value: string
};
export type Result = {
    result: SearchResult
};

export default class Search extends Component<Props> {
    componentWillUnmount() {
        this.props.unsetSearchResults();
    }

    handleSearchChange = (event: SyntheticEvent<>, { value }: Value) => {
        this.props.setSearchLoading(true);
        this.props.searchAll(value);
    };

    handleResultSelect = (event: SyntheticEvent<>, { result }: Result) => {
        this.props.history.push(result.path);
    };

    render() {
        const { translate, results, isLoading } = this.props;

        return (
            <SemanticSearch
                category={!Array.isArray(results)}
                placeholder={translate('search')}
                size='large'
                className='transparent'
                onSearchChange={this.handleSearchChange}
                onResultSelect={this.handleResultSelect}
                results={results}
                loading={isLoading}
            />
        );
    }
}
