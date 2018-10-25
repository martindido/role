import type { Store as ReduxStore } from 'redux';
import type BrowserHistory from 'history/createBrowserHistory';
import type MemoryHistory from 'history/createMemoryHistory';
import type { Action } from './Action';
import type { State } from './State';


export type Store = ReduxStore<State, Action>;
export type History = BrowserHistory | MemoryHistory;
