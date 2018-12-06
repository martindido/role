export type SearchResult = {
    title: string,
    path: string
};
export type SearchCategory = {
    name: string,
    results: Array<SearchResult>
};
export type SearchResults = Array<SearchResult> | {
    [string]: SearchCategory
};
