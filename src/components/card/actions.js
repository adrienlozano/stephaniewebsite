import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import { removeProps } from 'styled-system';
import { compose, defaultProps, setDisplayName, mapProps } from 'recompose';

const enhance = compose(
    setDisplayName("CardActions"),
    mapProps(removeProps),
    defaultProps({
        width: 1,
        px: 4
    })
)

const CardActions = enhance(Box);

export default styled(CardActions)`
    flex-shrink: 0;
    align-self:flex-end;
`;
