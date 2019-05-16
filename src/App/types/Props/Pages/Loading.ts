import { ReactNode } from 'react';
import { LoadingComponentProps } from 'react-loadable';

import { User } from '../../User';

export type LoadingPageProps = LoadingComponentProps &
    Readonly<{
        currentUser?: User;
        children?: ReactNode;
    }>;
