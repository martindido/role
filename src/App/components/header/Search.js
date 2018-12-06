import React, { Component } from 'react';
import { Search as SemanticSearch } from 'semantic-ui-react';

import type { SearchAllAction, SetSearchLoadingAction, UnsetSearchResultsAction } from '../../types/Action';
import type { SearchResults, SearchResult } from '../../types/Search';
import type { RouterHistory } from 'react-router-dom';

export type Props = {
    searchAll: string => SearchAllAction,
    isLoading: boolean,
    results: SearchResults,
    history: RouterHistory,
    setSearchLoading: boolean => SetSearchLoadingAction,
    unsetSearchResults: () => UnsetSearchResultsAction
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

    handleSearchChange = (event: {}, { value }: Value) => {
        this.props.setSearchLoading(true);
        this.props.searchAll(value);
    }

    handleResultSelect = (event: {}, { result }: Result) => {
        this.props.history.push(result.path);
    }

    render() {
        const { results, isLoading } = this.props;

        return (
            <SemanticSearch category={ !Array.isArray(results) } placeholder='Search...' size='large' className='transparent'
                onSearchChange={ this.handleSearchChange }
                onResultSelect={ this.handleResultSelect }
                results={ results }
                loading={ isLoading }
            />
        );
    }
}
