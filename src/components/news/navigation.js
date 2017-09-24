import React from 'react';
import PageSection from '~/components/page-section';
import Typography from '~/components/typography';
import Heading from '~/components/heading';
import { Box } from 'rebass';
import Link from "~/components/link";
import styled, { color, space, width, fontSize } from 'styled-components';
import Icon from "~/components/icon";
import { darken, lighten } from 'polished';

const NewsArticleLink = ({ className, link, isPrev = false}) => {
    if(!link)
        return null;
    var LinkIcon = isPrev ? <Icon icon="chevron-right"/> : <Icon icon="chevron-left"/>

    return <Link className={className} to={link.fields.slug}>{!isPrev ? LinkIcon : null}{isPrev ? "Older : " : "Newer : "}{link.frontmatter.title}{isPrev ? LinkIcon: null}</Link>
};

const StyledNewsArticleLink = styled(NewsArticleLink)`
    float: ${ ({isPrev}) => !isPrev ? 'left' : 'right' };
    color: ${ ({theme}) => theme.colors.dark };
    display: block;
    width:50%;
    text-align: ${ ({isPrev}) => !isPrev ? 'left' : 'right' };
    height:100%;
    line-height:4em;
    &:hover{
        background-color: ${ ({theme}) => theme.colors.primaryAccent };
        color: ${ ({theme}) => lighten(0.4, theme.colors.primaryAccent) };
        text-decoration:none;
    }
`;

const NavigationBox = styled(Box)`
    background-color: ${ ({theme}) => darken(0.05, theme.colors.light) };
    height:4em;
`

const ArticleNavigation = ({className, next, prev}) => {
    return (
        <NavigationBox className={className} >
            <StyledNewsArticleLink link={next}/>
            <StyledNewsArticleLink link={prev} isPrev={true}/>
        </NavigationBox>
    )
};

export default ArticleNavigation;