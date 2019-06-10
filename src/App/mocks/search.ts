import { SearchCategory, SearchResult, SearchResults } from '../types/Search';

export const VALUE = 'value';

export const searchResult: SearchResult = {
    title: 'title',
    path: '/path'
};

export const searchResults: SearchResults = [searchResult];

export const searchCategory: SearchCategory = {
    name: 'name',
    results: searchResults
};

export const searchResultsWithCategories: SearchResults = {
    [searchCategory.name]: searchCategory
};
