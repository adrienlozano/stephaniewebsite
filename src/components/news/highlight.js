import React from 'react';
import Typography from '~/components/typography';
import LinkButton from '~/components/link-button';
import { Box, Flex } from 'rebass';
import styled from 'styled-components';
import format from 'date-fns/format';

const StyledImage = styled.img`
    max-width: 100%;
`

export default ({className, article, ...rest}) => {
    article = article ? article : {};
    let image = article.image ? (<StyledImage src={article.image}></StyledImage>) : null;

    return (
        <Box className={className} {...rest}>
            <Typography component="h4" pb={0} mb={0}>{article.title}</Typography>
            <Typography f={1} pt={0} mt={1} color="secondaryAccent">{ format(article.date, "DD MMM, YYYY")}</Typography>
            {image}
            <Typography>{article.excerpt}</Typography>
            <LinkButton href={article.slug}>Read More</LinkButton>
        </Box>
    )
}