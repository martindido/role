import type { Store as ReduxStore } from 'redux';
import type { Action } from './Action';
import type { State } from './State';

export type Store = ReduxStore<State, Action>;
