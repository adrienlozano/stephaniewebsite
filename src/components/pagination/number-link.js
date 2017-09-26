import React from 'react';
import Link from "~/components/link";
import styled, { css } from "styled-components";
import { darken } from "polished";

const disabledCss = css`
    cursor:default;
    pointer-events: none;
    background-color: ${ ({theme}) => darken(0.1, theme.colors.light)};
`

export default styled(Link).attrs({
    activeClassName : props => props.activeClassName || "active",
    exact: props => props.exact || true,
    disabled: props => props.disabled || false
})`
    background-color: ${ ({theme}) => darken(0.4, theme.colors.light) };
    text-decoration:none !important;
    &:hover{
        background-color: ${({theme}) => theme.colors.secondaryAccent };
    }
    margin: 0 5px 30px;
    border-radius: 3px;
    line-height: 25px;
    height:25px;
    width: 20px;
    color: #FFF;
    padding: 3px 6px;


    &.active{
        background-color: ${ ({theme}) => theme.colors.primaryAccent };
        cursor:default;
    }

    ${ ({disabled}) => disabled ? disabledCss : null };
`