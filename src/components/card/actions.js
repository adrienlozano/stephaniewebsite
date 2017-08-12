import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
import { removeProps } from 'styled-system';
import { compose, defaultProps, setDisplayName, mapProps } from 'recompose';

const enhance = compose(
    setDisplayName("CardActions"),
    mapProps(removeProps),
    defaultProps({
        width: 1,
        px: 4,
        column: false
    })
)

const CardActions = enhance(Flex);

export default styled(CardActions)`
    flex: 1;
    align-items: flex-end;
`;
