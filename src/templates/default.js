import React from 'react';
import PageSection from '~/components/page-section';
import Typography from '~/components/typography';
import Heading from '~/components/heading';
import { Box, Flex } from 'rebass';
import { Navigation, NavigationItem,  NavigationLink } from '~/components/navigation';
import styled from 'styled-components';
import {responsiveStyle, width} from 'styled-system';
import { lighten, darken } from 'polished';

const Tiles = styled.div`
    display:flex;
    justify-content: stretch;
    align-content: space-between;
    flex-wrap:wrap;
    background-color: ${( ({theme}) => theme.colors.secondaryAccent) };

`;

const Tile = styled.div`
    ${width};
    background-color: ${ ({theme, number}) => number % 2 === 0 || (number / 4) % 2 !== 0 ? lighten(0.2, theme.colors.primary) : lighten(0.1, theme.colors.secondary) };
    border-bottom:solid 1px ${ ({theme}) => lighten(0.1, theme.colors.primary)};
    border-right:solid 1px ${ ({theme}) => lighten(0.1, theme.colors.primary)};
    line-height:10vw;
    ${ responsiveStyle('font-size', 'fontSize') };

    &:hover{
        border-bottom: solid 1px ${({theme}) => lighten(0.1, theme.colors.primaryAccent)};
        transition: all 0.2s;
        a {
            background-color: ${ ({theme}) => theme.colors.primaryAccent };
            transition: all 0.2s;
        }
    }

    a {
        font-size: 0.9em;
        width:100%;
        height:100%;
    }
    a:visited, a:link {
        color: #FFF;
    }
`;

const Separator = styled.div`
    background-color: ${ ({theme, bg}) => bg ? theme.colors[bg] : theme.colors.primary };
    color: ${ ({theme}) => darken(0.25, theme.colors.primary) };
    height:2em;
    line-height:2em;
    text-align:center;
    font-size:1.3em;
`

const ServiceRoute = ({data}) =>{
    let { related, item } = data;
    let { html, frontmatter } = item;
    let image = frontmatter.image ? (<img style={{ maxWidth: "100%" }} src={frontmatter.image}></img>) : null;
    var relatedLinks = related ? related.edges.map( ({node}, index) => (
        <Tile key={ `tl${node.fields.slug}`} number={index} width={[1, 1/2, 1/4]} fontSize={["1em", "1em", "1.3em", "1.5em"]}>
            <NavigationLink to={node.fields.slug}>{node.frontmatter.title}</NavigationLink>
        </Tile>
    )) : null;

    var other = related ? [ <Separator key="lookingforsomethingelse">Looking for something else?</Separator>, <Tiles key="tiles">{relatedLinks}</Tiles> ] : [];

    return (
        <Box>
            <PageSection bg="light">
                <Heading>{frontmatter.title}</Heading>
                {image}
                <Box dangerouslySetInnerHTML={{ __html: html }}></Box>
            </PageSection>
            {other}
            <Separator bg="secondaryAccent" />
        </Box>
    )
}

export default ServiceRoute;

export const pageQuery = graphql`
    query PageByCategory($slug: String!, $area: String!){
        item: markdownRemark(fields: { slug: { eq: $slug }}){
            html
            frontmatter{
                title,
                image
            }
        },
        related: allMarkdownRemark(
            filter:{
                fields: {
                    area: { eq: $area },
                    slug: { ne : $slug }
                }
            }
            sort: { fields: [frontmatter___date],  order: DESC }
        ){
            edges{
                node{
                    id
                    fields{
                        area,
                        slug
                    }
                    frontmatter{
                        title
                    }
                }
            }
        }
    }
`