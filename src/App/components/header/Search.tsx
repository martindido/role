import React, { Component, SyntheticEvent } from 'react';
import { Search as SemanticSearch, SearchResultData, StrictSearchProps } from 'semantic-ui-react';

import { SearchProps } from '../../types/Props/Header/Search';

export default class Search extends Component<SearchProps> {
    componentWillUnmount() {
        this.props.unsetSearchResults();
    }

    handleSearchChange = (event: SyntheticEvent, { value = '' }: StrictSearchProps) => {
        this.props.setSearchLoading(true);
        this.props.searchAll(value);
    }

    handleResultSelect = (event: SyntheticEvent, { result }: SearchResultData) => {
        this.props.history.push(result.path);
    }

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
