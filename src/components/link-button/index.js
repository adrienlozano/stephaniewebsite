import React from 'react';
import { BlockLink } from 'rebass';
import styled from 'styled-components';
import { color } from 'styled-system';
import { defaultProps, compose } from 'recompose';

const StyledButton = styled(BlockLink)`
    background-color: transparent;
    ${color};
    &:hover, &:active {
        font-weight:bold;
        background-color:inherit;
    }
    &:visited, &:link{
        ${color};
    }
    cursor: pointer;
`

const enhance = compose(
    defaultProps( {
        color: "primaryAccent"
    } )
)

export default enhance(StyledButton);