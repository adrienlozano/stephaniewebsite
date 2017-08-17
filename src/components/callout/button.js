import React from 'react';
import styled from 'styled-components';
import { Link } from 'rebass';
import { lighten } from 'polished';

const CalloutButton = styled(Link)`
    background-color: ${ ({theme}) => theme.colors.primaryAccent };
    border-radius: 10px;
    text-decoration: none;
    color: ${ ({theme}) => theme.colors.white };

    &:hover {
        background-color: ${ ({theme}) =>  theme.colors.secondaryAccent } ;
    }
    padding: 0.6em;
    display:inline-block;
    margin-left:auto;
    margin-right:auto;
    font-size: 1.5em;
    cursor:pointer;
`

export default CalloutButton;