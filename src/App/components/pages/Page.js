import React, { Component } from 'react';
import Helmet from 'react-helmet';
import logo from '../../images/logo.png';
import Header from '../../containers/header/Header';
import NewLoading from '../../containers/Loading';
import { Segment } from 'semantic-ui-react';

import '../../styles/Page.css';

import type { Node } from 'react';
import type { Location } from 'react-router-dom';
import type { Props as HeaderProps } from '../../components/header/Header';

type Rest = {
    title: string,
    separator: string,
    description: string,
    image: string,
    contentType: string,
    twitter: string,
    twitterSite: string,
    noCrawl?: boolean,
    published?: string,
    updated?: string,
    category?: string,
    tags?: string
};
type Props = {
    children: Node,
    location: Location,
    id: string,
    className: string,
    schema: string,
    isLoading?: boolean,
    isNotFound?: boolean,
    withHeader?: boolean,
    forceLoading?: boolean,
    forceNotFound?: boolean,
    header?: HeaderProps
} & Rest;

const SITE_URL = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://cra-ssr.herokuapp.com';
const FACEBOOK_APP_ID = 'XXXXXXXXX';
const defaultTitle = 'Role';

export default class Page extends Component<Props> {
    static defaultProps = {
        title: defaultTitle,
        image: `${ SITE_URL }${ logo }`,
        description: 'This is a really awesome website where we can render on the server. Supa cool.',
        contentType: 'website',
        twitter: '@martindido87',
        twitterSite: '@martindido87',
        schema: 'WebPage',
        separator: ' | ',
        className: '',
        isLoading: false,
        isNotFound: false,
        withHeader: true,
        forceLoading: false,
        header: {}
    }

    getMetaTags(
        {
            title,
            description,
            image,
            contentType,
            twitter,
            twitterSite,
            noCrawl,
            published,
            updated,
            category,
            tags,
            separator
        }: Rest,
        pathname: string
    ) {
        const theTitle = (
            title + separator + defaultTitle).substring(0, 60);
        const theDescription = description.substring(0, 155);
        const metaTags = [
            {
                itemprop: 'name',
                content: theTitle
            },
            {
                itemprop: 'description',
                content: theDescription
            },
            {
                itemprop: 'image',
                content: image
            },
            {
                name: 'description',
                content: theDescription
            },
            {
                name: 'twitter:card',
                content: 'summary_large_image'
            },
            {
                name: 'twitter:site',
                content: twitterSite
            },
            {
                name: 'twitter:title',
                content: theTitle
            },
            {
                name: 'twitter:description',
                content: theDescription
            },
            {
                name: 'twitter:creator',
                content: twitter
            },
            {
                name: 'twitter:image:src',
                content: image
            },
            {
                property: 'og:title',
                content: theTitle
            },
            {
                property: 'og:type',
                content: contentType || 'website'
            },
            {
                property: 'og:url',
                content: SITE_URL + pathname
            },
            {
                property: 'og:image',
                content: image
            },
            {
                property: 'og:description',
                content: theDescription
            },
            {
                property: 'og:site_name',
                content: defaultTitle
            },
            {
                property: 'fb:app_id',
                content: FACEBOOK_APP_ID
            }
        ];

        if (noCrawl) {
            metaTags.push({
                name: 'robots',
                content: 'noindex, nofollow'
            });
        }
        if (published) {
            metaTags.push({
                name: 'article:published_time',
                content: published
            });
        }
        if (updated) {
            metaTags.push({
                name: 'article:modified_time',
                content: updated
            });
        }
        if (category) {
            metaTags.push({
                name: 'article:section',
                content: category
            });
        }
        if (tags) {
            metaTags.push({
                name: 'article:tag',
                content: tags
            });
        }
        return metaTags;
    }

    render() {
        const {forceLoading, isLoading, forceNotFound, isNotFound, children, id, className, schema, location, withHeader, header, ...rest} = this.props;
        const loading = forceLoading || isLoading;
        const notFound = forceNotFound || isNotFound;
        const finalId = loading ? 'loading' : (notFound ? 'not-found' : id);
        const title = loading ? 'Loading...' : (notFound ? 'Not Found' : rest.title);

        rest.noCrawl = loading || notFound || rest.noCrawl;
        return (
            <div id={ finalId } className={ `page ${ className }${ loading ? ' loading' : '' }` }>
                <Helmet
                    htmlAttributes={ {
                        lang: 'en',
                        itemscope: undefined,
                        itemtype: `http://schema.org/${ schema }`
                    } }
                    title={ title + rest.separator + defaultTitle }
                    link={ [
                        {
                            rel: 'canonical',
                            href: SITE_URL + location.pathname
                        }] }
                    meta={ this.getMetaTags(rest, location.pathname) }
                />
                { withHeader ? (
                    <Header { ...header } forceLoading={ forceLoading }/>
                ) : null }
                { loading ? (
                    <NewLoading/>
                ) : (
                    withHeader ? (
                        <Segment basic>
                            { notFound
                                ? (<p>Not Found</p>)
                                : children
                            }
                        </Segment>
                    ) : (
                        notFound
                            ? (
                                <Segment basic>
                                    <p>Not Found</p>
                                </Segment>
                            )
                            : children
                    )
                ) }
            </div>
        );
    }
}
