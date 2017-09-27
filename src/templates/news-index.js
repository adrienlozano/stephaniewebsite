import React from 'react';
import PageSection from "~/components/page-section";
import Typography from '~/components/typography';
import Heading from '~/components/heading';
import LinkButton from '~/components/link-button';
import { Box } from 'rebass';
import format from 'date-fns/format';
import Pagination from '~/components/pagination';
import NumberLink from '~/components/pagination/number-link';
import Link, { BadgeLink } from '~/components/link';
import { curry } from 'ramda';
import Icon from '~/components/icon';
import {Badge} from 'rebass';
import kebabCase from "~/utils/kebab-case";
import styled from "styled-components";

const toAreaPageUrl = curry((area, page) => {
    return page === 1 ? `/${area}` : `/${area}/page/${page}`;
});

export default ({data, pathContext}) =>{
    const news = data ? data.news.edges.map(x => ({ ...x.node.frontmatter, id:x.node.id, slug: x.node.fields.slug, excerpt: x.node.excerpt })) : [];
    const { current, total, area } = pathContext;
    const toPageUrl = toAreaPageUrl(area);

    var articles = news.map( ({title, excerpt, slug, date, tags, id}) => {
        
        return (
        <Box key={slug} mb={5} >
            <Typography component="h4" pb={0} mb={0}>{title}</Typography>
            <Typography f={1} pt={0} mt={1} color="secondaryAccent">{ format(date, "DD MMM, YYYY")}</Typography>
            <Icon style={{ marginRight: "10px"}} icon="tag"/>{ tags.map((x, index) => (<BadgeLink key={x} to={`/news/tags/${kebabCase(x)}`}>{x}</BadgeLink>)) }
            <Typography>{excerpt}</Typography>
            <LinkButton href={slug}>Read More</LinkButton>
        </Box>
    )});

    return (
        <PageSection bg="light">
            <Heading>News</Heading>
            {articles}
            <Pagination current={current} total={total}
                renderPrevious={ (index, hasPrevious) => (<NumberLink key={`prev_${index}`} to={toPageUrl(index)} disabled={ !hasPrevious }><Icon icon="chevron-double-left"/> previous </NumberLink>) }
                renderNext={ (index, hasNext) => (<NumberLink key={`next_${index}`} to={toPageUrl(index)} disabled={ !hasNext } >next <Icon icon="chevron-double-right"/> </NumberLink>) }
                renderPage={ (index) => (<NumberLink key={index} to={toPageUrl(index) }>{index}</NumberLink>) }
            />
        </PageSection>
    )
}


export const pageQuery = graphql`
query IndexQuery($skip: Int!, $pageSize: Int!) {
  news: allMarkdownRemark(
    skip: $skip,
    limit: $pageSize,
    filter:{ fields: { area: { eq: "news"} }}
    sort: {fields: [frontmatter___date], order: DESC}
    ) {
    edges {
      node {
        timeToRead
        excerpt(pruneLength: 350)
        fields {
          area,
          slug
        }
        frontmatter {
          title
          date,
          tags,
          caption,
          image,
          tags,
          date
        }
      }
    }
  }
}
`
