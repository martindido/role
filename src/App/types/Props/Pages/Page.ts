import { ReactNode } from 'react';

import { HeaderConfigProps } from '../Header/Header';

export type PageMetaDefaultProps = Readonly<{
    image: string;
    description: string;
    contentType: string;
    twitter: string;
    twitterSite: string;
    separator: string;
    schema: string;
}>;

export type PageConfigDefaultProps = Readonly<{
    id: string;
    title: string;
    className: string;
    children: ReactNode;
    isLoading: boolean;
    isNotFound: boolean;
    withHeader: boolean;
    forceLoading: boolean;
    forceNotFound: boolean;
    header: HeaderConfigProps;
}>;

export type PageDefaultProps = PageMetaDefaultProps & PageConfigDefaultProps;

export type PageMetaProps = Partial<PageMetaDefaultProps> &
    Readonly<
        Partial<{
            noCrawl: boolean;
            published: string;
            updated: string;
            category: string;
            tags: string;
        }>
    >;

export type PageConfigProps = Partial<PageConfigDefaultProps>;

export type PageProps = PageMetaProps & PageConfigProps;
