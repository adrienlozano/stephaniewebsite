import React from 'react';
import { Button } from 'rebass';
import styled from 'styled-components';
import { color } from 'styled-system';

const StyledButton = styled(Button)`
    background-color: transparent;
    ${color};
    padding: 0;
    &:hover {
        font-weight:bold;
        background-color:transparent;
    }
`

export default StyledButton;