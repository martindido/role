import { SearchResults } from '../Search';

export type SearchState = {
    readonly results: SearchResults;
    readonly isLoading: boolean;
};
