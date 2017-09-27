import React from 'react';
import { Box } from 'rebass';
import Link from "~/components/link";
import styled from 'styled-components';
import Icon from "~/components/icon";
import { darken, lighten } from 'polished';
import { path } from 'ramda';

const getTitle = path(['frontmatter', "title"]);
const getSlug = path(["fields", "slug"]);

const HideOnMobile = styled.span`
    @media (max-width: ${ ({theme}) => theme.breakpoints[0]}em){
        display:none;
    }
`

const NewsArticleLink = ({dock, link, linkAccessor, ...rest}) => {
    if(!link) return null;
    return <Link to={linkAccessor(link)} {...rest} />;
}

const StyledNewsArticleLink = styled(NewsArticleLink)`
    color: ${ ({theme}) => theme.colors.dark };
    display:flex;
    flex:1;
    align-items: center;
    justify-content: ${ ({dock}) => dock === "left" ? 'flex-start' : 'flex-end' };
    height: 4em;
    text-overflow: ellipsis;
    white-space:nowrap;
    overflow: hidden;

    &:hover{
        background-color: ${ ({theme}) => theme.colors.primaryAccent };
        color: ${ ({theme}) => lighten(0.4, theme.colors.primaryAccent) };
        text-decoration:none;
    }
`;

const NavigationBox = styled(Box)`
    background-color: ${ ({theme}) => darken(0.05, theme.colors.light) };
    display:flex;
`

const ArticleNavigation = ({className, next, prev}) => {

    return (
        <NavigationBox className={className} >
            <StyledNewsArticleLink link={next} dock="left" linkAccessor={getSlug} >
                <Icon icon="chevron-double-left"/> Newer <HideOnMobile>&nbsp;: {getTitle(next)}</HideOnMobile>
            </StyledNewsArticleLink>

            <StyledNewsArticleLink link={prev} dock="right" linkAccessor={getSlug}>
                <HideOnMobile>{getTitle(prev)} :&nbsp;</HideOnMobile>Older <Icon icon="chevron-double-right"/>
            </StyledNewsArticleLink>
        </NavigationBox>
    )
};

export default ArticleNavigation;