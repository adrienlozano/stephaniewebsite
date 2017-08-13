import React from 'react';
import { Box } from 'rebass';
import Typography from '~/components/typography';
import format from 'date-fns/format';

export default ({className, title, date}) => {

    return (
        <Box className={className}>
            <Typography f={1} color="secondaryAccent">{ format(date, "DD MMM, YYYY")}</Typography>
            <Typography f={1}>{title}</Typography>
        </Box>
    );
}

