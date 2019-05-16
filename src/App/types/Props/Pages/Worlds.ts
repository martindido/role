import { LoadWorldsActionCreator } from '../../Action/Load';
import { World } from '../../World';

export type WorldsPageProps = Readonly<{
    worlds: World[];
    loadWorlds: LoadWorldsActionCreator;
}>;
