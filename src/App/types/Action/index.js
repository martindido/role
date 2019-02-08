import type { AuthAction } from './Auth';
import type { GraphQLAction } from './GraphQL';
import type { LoadAction } from './Load';
import type { LocaleAction } from './Locale';
import type { RoutingAction } from './Routing';
import type { SearchAction } from './Search';
import type { StorageAction } from './Storage';
import type { SyncAction } from './Sync';

export type Action =
    | AuthAction
    | GraphQLAction
    | LoadAction
    | LocaleAction
    | RoutingAction
    | SearchAction
    | StorageAction
    | SyncAction;
