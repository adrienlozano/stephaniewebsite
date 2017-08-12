import React from 'react';
import styled from 'styled-components';
import { Button } from 'rebass';
import { darken } from 'polished';
/*
const theme = {
        colors: {
            primary: "#11ACE7",
            secondary:"#0277BD",
            primaryAccent: "#F50057",
            secondaryAccent: "#F06292",
            neutralAccent: "#9CCC65",
            dark: "#263238",
            light: "#EEE",
            danger: "#FF1E57"
        },
        font: "Roboto, Serif"*/

const CalloutButton = styled(Button)`
    background-color: ${ ({theme}) => theme.colors.neutralAccent };
    border-radius: 10px;

    &:hover {
        background-color: ${ ({theme}) => darken(0.3, theme.colors.neutralAccent) } ;
    }
    margin-left:auto;
    margin-right:auto;
`

export default CalloutButton;