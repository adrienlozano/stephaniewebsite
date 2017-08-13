import React from 'react';
import styled from 'styled-components';
import { Flex } from  'rebass';
import { compose, defaultProps, setDisplayName } from 'recompose';

const enhance = compose(
    setDisplayName("CardContent"),
    defaultProps({
        width: 1,
        px: 4,
        column: true
    })
)

const CardContent = enhance(Flex);

export default styled(CardContent)`
    text-align:left;
`;