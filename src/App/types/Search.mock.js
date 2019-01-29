export const VALUE = 'value';

export const searchResult = {
    title: 'title',
    path: '/path'
};

export const searchResults = [searchResult];

export const searchCategory = {
    name: 'name',
    results: searchResults
};

export const searchResultsWithCategories = {
    [searchCategory.name]: searchCategory
};
