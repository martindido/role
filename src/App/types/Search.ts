export type SearchResult = {
    title: string;
    path: string;
};

export type SearchCategory = {
    name: string;
    results: SearchResult[];
};

export type SearchCategories = {
    [key: string]: SearchCategory;
};

export type SearchResults = SearchResult[] | SearchCategories;
