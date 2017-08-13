import React from 'react';
import styled from 'styled-components';
import { Link } from 'rebass';
import { darken } from 'polished';

const CalloutButton = styled(Link)`
    background-color: ${ ({theme}) => theme.colors.neutralAccent };
    border-radius: 10px;
    text-decoration: none;
    color: ${ ({theme}) => theme.colors.white };

    &:hover {
        background-color: ${ ({theme}) => darken(0.3, theme.colors.neutralAccent) } ;
    }
    padding: 0.6em;
    display:inline-block;
    margin-left:auto;
    margin-right:auto;
    font-size: 1.5em;
    cursor:pointer;
`

export default CalloutButton;