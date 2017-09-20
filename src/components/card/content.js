import React from 'react';
import styled, { removeProps, space, width }  from 'styled-components';
import { Box } from  'rebass';
import { compose, defaultProps, setDisplayName } from 'recompose';

const enhance = compose(
    setDisplayName("CardContent"),
    defaultProps({
        width: 1,
        px: 4
    })
)

const CardContent =  styled(Box)`
    text-align:left;
    flex:1 0 auto;
`;

export default enhance(CardContent);