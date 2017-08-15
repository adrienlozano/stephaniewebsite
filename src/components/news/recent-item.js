import React from 'react';
import { Box } from 'rebass';
import Typography from '~/components/typography';
import format from 'date-fns/format';
import styled from 'styled-components';

const Link = styled.a`
    text-decoration: none;
    display:block;

    &:hover{

        font-weight:bold;
    }
`

export default ({className, title, date, slug}) => {

    return (
        <Box className={className}>
            <Link href={slug}>
                <Typography f={1} color="secondaryAccent">{ format(date, "DD MMM, YYYY")}</Typography>
                <Typography f={1}>{title}</Typography>
            </Link>
        </Box>
    );
}

